import ProductCard from "./ProductCard";

// Define DataType to match ProductSchema
interface DataType {
  _id: string;
  name: string;
  details: {
    additionalDescription?: string;
    ingredientsDescription: string;
  };
  ratings: number;
  images: Array<{
    _id: string;
    url: string;
  }>;
  specifications: { [key: string]: string };
  variants: Array<{
    size: string;
    actualPrice: number;
    offer?: number;
    stock: number;
  }>;
  numOfReviews: number;
  reviews: Array<{
    user: string;
    ratings: number;
    comment: string;
  }>;
  user: string;
  createdAt: string;
  updatedAt: string;
  badge?: string;
  tags?: string[];
  delay?: string;
}

const ProductCardList = ({ product }: { product: DataType }) => {
  return <ProductCard product={product} cardType="list" />;
};

export default ProductCardList;
