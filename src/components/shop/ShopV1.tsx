import { useEffect, useRef, useState } from "react";
import { useGetProductsQuery } from "../../store/api/productApi";
import SingleShopV1 from "./SingleShopV1";
import shape29 from "/assets/img/shape/29.webp";
import shape30 from "/assets/img/shape/30.webp";

const ShopV1 = () => {
  const [page, setPage] = useState(1);
  // You may want to replace 'any' with your actual Product type if available
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  // Fetch products for the current page
  const { data, isLoading, isError, error, isFetching } = useGetProductsQuery({
    page,
    resPerPage: 8,
  });

  // Append new products when data is received
  useEffect(() => {
    if (data?.filteredProducts) {
      setAllProducts((prev) => [...prev, ...data.filteredProducts]);
    }
  }, [data]);

  // Set up IntersectionObserver to detect when the user reaches the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && !isError) {
          setPage((prev) => prev + 1); // Increment page to fetch next set of products
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [isFetching, isError]);

  // Handle loading state
  if (isLoading && page === 1) {
    return (
      <div className="validtheme-shop-area default-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Loading products...</p>
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
                Error loading products:{" "}
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
              <h4 className="sub-title">Our products</h4>
              <h2 className="title">Explore products</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="vt-products columns-4 d-flex align-items-stretch">
              {allProducts.map((product, index) => (
                <SingleShopV1 product={product} key={product?._id || index} />
              ))}
            </ul>
            {/* Element to observe for triggering next page load */}
            {data?.filteredProducts?.length > 0 && (
              <div ref={loadMoreRef} style={{ height: "20px" }}></div>
            )}
            {isFetching && <p>Loading more products...</p>}
            {/* {data?.filteredProducts?.length === 0 && (
              <p>No more products to load.</p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopV1;
