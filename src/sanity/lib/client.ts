import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Create the Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2023-01-01',
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Correctly define the parameter type
export const urlFor = (source: SanityImageSource) => builder.image(source);
