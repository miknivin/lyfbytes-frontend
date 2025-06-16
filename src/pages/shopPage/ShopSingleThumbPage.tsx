import { useGetProductDetailsQuery } from "../../store/api/productApi";
import ShopSingleThumbContent from "../../components/shop/ShopSingleThumbContent";
import { useParams } from "react-router-dom";
import LayoutV5 from "../../components/layouts/LayoutV5";
import SpinnerLoader from "../../components/utils/SpinnerLoader";

export interface DataType {
  _id: string;
  name: string;
  details: {
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

const ShopSingleThumbPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetProductDetailsQuery(id || "", {
    skip: !id,
  });
  return (
    <LayoutV5
      title={data?.productById?.name || "Product Details"}
      breadCrumb={data?.productById?.name}
    >
      <SpinnerLoader isLoading={isLoading} />
      {isError && <div>Error loading product details</div>}
      {data?.productById && (
        <ShopSingleThumbContent productInfo={data?.productById} />
      )}
      {!isLoading && !isError && !data?.productById && <div>No Data Found</div>}
    </LayoutV5>
  );
};

export default ShopSingleThumbPage;
