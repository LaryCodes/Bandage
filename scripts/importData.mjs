import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2025-01-13',
  token: process.env.SANITY_API_TOKEN,
});

async function uploadImageToSanity(imageUrl) {
  if (!imageUrl) {
    console.log('❌ Skipping image upload: No image URL provided.');
    return null;
  }

  console.log("Uploading image:", imageUrl);
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`✅ Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('❌ Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageUrl = product.images?.[0]; // Extract first image from array
    if (!imageUrl) {
      console.log(`❌ Skipping ${product.title}: No image found.`);
      return;
    }

    const imageId = await uploadImageToSanity(imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage,
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`✅ Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`❌ Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('❌ Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = Array.isArray(data.products) ? data.products : [data.products];

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('❌ Error fetching products:', error);
  }
}

importProducts();
