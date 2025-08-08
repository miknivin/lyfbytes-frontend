import { useEffect, useRef, useState } from "react";
import { useGetProductsQuery } from "../../store/api/productApi";
import SingleShopV1 from "./SingleShopV1";
import "./EqualHeightCards.css";
import shape29 from "/assets/img/shape/29.webp";
import shape30 from "/assets/img/shape/30.webp";

// Define Product type if not already imported
type Product = {
  _id: string;
  ratings?: number;
  // Add other fields as needed
};

const ShopV1 = () => {
  const [page, setPage] = useState(1);
  // You may want to replace 'any' with your actual Product type if available
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [bestSellerIds, setBestSellerIds] = useState<Set<string>>(new Set());
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  // Fetch bestsellers to identify which products should have badges
  const { data: bestSellersData } = useGetProductsQuery({
    page: 1,
    resPerPage: 8,
  });

  useEffect(() => {
    if (bestSellersData?.filteredProducts) {
      // Get top-rated products (same logic as BestSellers component)
      const sortedProducts = [...bestSellersData.filteredProducts]
        .filter((product) => product.ratings && product.ratings > 0)
        .sort((a, b) => (b.ratings || 0) - (a.ratings || 0))
        .slice(0, 8);
      
      const bestSellerProductIds: Set<string> = sortedProducts.length > 0 
        ? new Set<string>(sortedProducts.map((p: Product) => p._id))
        : new Set<string>(bestSellersData.filteredProducts.slice(0, 8).map((p: Product) => p._id));
        
      setBestSellerIds(bestSellerProductIds);
    }
  }, [bestSellersData]);

  // Fetch products for the current page
  const { data, isLoading, isError, error, isFetching } = useGetProductsQuery({
    page,
    resPerPage: 8,
  });

  // Reset products when component mounts
  useEffect(() => {
    setAllProducts([]);
    setPage(1);
  }, []); // Empty dependency array means this runs only on mount

  // Append new products when data is received
  useEffect(() => {
    if (data?.filteredProducts) {
      setAllProducts((prev) => {
        // Get existing product IDs to avoid duplicates
        const existingIds = new Set(prev.map(p => p._id));
        
        // Filter out products that are already in the list
        const newProducts = data.filteredProducts.filter(
          (          product: { _id: any; }) => !existingIds.has(product._id)
        );
        
        // Only add new products
        if (newProducts.length > 0) {
          return [...prev, ...newProducts];
        }
        
        return prev; // Return existing array if no new products
      });
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
            <div
              style={{ justifyContent: "stretch", alignItems: "stretch" }}
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex equal-height-cards"
            >
              {allProducts.map((product, index) => (
                <div className="col h-100" key={product?._id || index}>
                  <SingleShopV1 product={{
                    ...product, 
                    isBestSeller: bestSellerIds.has(product._id)
                  }} />
                </div>
              ))}
            </div>
            {/* Element to observe for triggering next page load */}
            {data?.filteredProducts?.length > 0 && (
              <div ref={loadMoreRef} style={{ height: "20px" }}></div>
            )}
            {isFetching && <p>Loading more products...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopV1;
