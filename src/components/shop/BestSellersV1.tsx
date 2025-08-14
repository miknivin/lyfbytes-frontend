import { useGetProductsQuery } from "../../store/api/productApi";
import SingleShopV1 from "./SingleShopV1";
import shape29 from "/assets/img/shape/29.webp";
import shape30 from "/assets/img/shape/30.webp";

const BestSellersV1 = () => {
  // Fetch only the first 8 products for best sellers
  const { data, isLoading, isError, error } = useGetProductsQuery({
    page: 1,
    resPerPage: 8,
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div className="validtheme-shop-area default-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Loading best sellers...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div className="validtheme-shop-area default-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Error loading best sellers:{" "}
                {(() => {
                  if (!error) return "Unknown error";
                  if ("message" in error) return error.message;
                  if ("error" in error) return (error as any).error;
                  if ("status" in error)
                    return `Status: ${(error as any).status}`;
                  return "Unknown error";
                })()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="validtheme-shop-area default-padding text-center">
      <div className="shape-seperate">
        <img style={{ opacity: 0.4 }} src={shape29} alt="life bites" />
        <img style={{ opacity: 0.3 }} src={shape30} alt="life bites" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Best Sellers</h4>
              <h2 className="title">Our Top Products</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              style={{ justifyContent: "stretch", alignItems: "stretch" }}
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex"
            >
              {data?.filteredProducts?.map((product: any, index: number) => (
                <div className="col h-100" key={product?._id || index}>
                  <SingleShopV1 product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersV1;
