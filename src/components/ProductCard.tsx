import Image from 'next/image';

interface Product {
  imageUrl: string; // Ensure this is processed correctly before passing
  description: string;
  price: number | null; // Nullable, handled with fallback
  tags: string[];
  discountPercentage: number;
  isNew?: boolean; // Optional
  _id: string;
  title: string;
}

const ProductCard = (props: Product) => {
  const {
    imageUrl,
    title,
    price,
    tags,
    discountPercentage,
    isNew,
    description,
  } = props;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title || 'Product Image'}
          width={305}
          height={375}
          className="w-full h-auto"
        />
        {isNew && (
          <div className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded-full text-xs">
            New
          </div>
        )}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white py-1 px-3 rounded-full text-xs">
            {discountPercentage}% Off
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title || 'Untitled'}</div>
        <p className="text-gray-700 text-base mb-4">
          {description || 'No description available.'}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-gray-900 font-bold text-lg">
            ${price !== null ? price.toFixed(2) : 'N/A'}
          </div>
          <div className="flex space-x-2">
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                >
                  {tag.trim()}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-xs">No tags</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
