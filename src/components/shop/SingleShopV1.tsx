import ProductCard from "./ProductCard";

// Define DataType to match ProductSchema
interface DataType {
  _id: string; // MongoDB ObjectId as string
  name: string; // Product name
  details: {
    additionalDescription?: string;
    ingredientsDescription: string; // Ingredients description
  };
  ratings: number; // Product rating
  images: Array<{
    _id: string; // Image ObjectId as string
    url: string; // Image URL
  }>;
  specifications: { [key: string]: string }; // Map of specifications
  variants: Array<{
    size: string; // Variant size (e.g., "200g")
    actualPrice: number; // Actual price
    offer?: number; // Optional offer price
    stock: number; // Stock quantity
  }>;
  numOfReviews: number; // Number of reviews
  reviews: Array<{
    user: string; // User ObjectId as string
    ratings: number; // Review rating
    comment: string; // Review comment
  }>;
  user: string; // User ObjectId as string
  createdAt: string; // Timestamp for creation
  updatedAt: string; // Timestamp for last update
  // Optional fields for compatibility with existing UI
  badge?: string;
  tags?: string[];
  delay?: string;
  isBestSeller?: boolean; // Flag to indicate if product is a bestseller
}

const SingleShopV1 = ({ product }: { product: DataType }) => {
  return <ProductCard product={product} cardType="grid" />;
};

export default SingleShopV1;
