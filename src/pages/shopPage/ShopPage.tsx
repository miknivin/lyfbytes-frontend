import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../../store/api/productApi";
import SingleShopV1 from "../../components/shop/SingleShopV1";
import HeaderV2 from "../../components/header/HeaderV2";
import FooterV1 from "../../components/footer/FooterV1";
import shape29 from "/assets/img/shape/29.webp";
import shape30 from "/assets/img/shape/30.webp";

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [loadingAll, setLoadingAll] = useState(false);
  const loadMoreRef = useRef(null);

  // Fetch products for the current page with category filter
  const queryParams = {
    page,
    resPerPage: 12,
    ...(category && { category }), // Only include category if it exists
  };
  
  const { data, isLoading, isError, error, isFetching } = useGetProductsQuery(queryParams);

  // Function to load all remaining products
  const loadAllProducts = async () => {
    setLoadingAll(true);
    console.log('Starting to load all products. Current products:', allProducts.length);
    
    try {
      // Load ALL products in one request with a very high resPerPage
      const queryParamsAll = {
        page: "1",
        resPerPage: "100", // Set high limit to get all products
        ...(category && { category }),
      };
      
      console.log('Fetching all products in one request...');
      
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || ""}/api/products/getAllProducts?${new URLSearchParams(queryParamsAll).toString()}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          }
        }
      );
      
      const result = await response.json();
      console.log('API Response:', {
        totalProducts: result.filteredProducts?.length,
        totalCount: result.filteredProductsCount,
        resultCount: result.resultPerPage,
        currentPage: result.currentPage,
        totalPages: result.totalPages
      });
      
      if (result.filteredProducts && result.filteredProducts.length > 0) {
        console.log('Setting all products:', result.filteredProducts.length);
        setAllProducts(result.filteredProducts);
      } else {
        console.log('No products found in response');
      }
      
    } catch (error) {
      console.error('Error loading all products:', error);
    } finally {
      setLoadingAll(false);
    }
  };

  // Reset products when category changes OR when component mounts
  useEffect(() => {
    setAllProducts([]);
    setPage(1);
  }, [category]);

  // Reset everything when component first mounts (handles refresh/navigation)
  useEffect(() => {
    setAllProducts([]);
    setPage(1);
    setLoadingAll(false);
  }, []); // Empty dependency array means this runs only on mount

  // Append new products when data is received
  useEffect(() => {
    if (data?.filteredProducts) {
      console.log('API Response - Page:', page, 'Products:', data.filteredProducts.length, 'Total Count:', data.filteredProductsCount);
      if (page === 1) {
        setAllProducts(data.filteredProducts);
      } else {
        setAllProducts((prev) => [...prev, ...data.filteredProducts]);
      }
    }
  }, [data, page]);

  // Set up IntersectionObserver to detect when the user reaches the bottom
  useEffect(() => {
    const loadMoreElement = loadMoreRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && !isError) {
          // Only load more if the current page returned a full batch (12 products)
          // This indicates there might be more products available
          const currentPageSize = data?.filteredProducts?.length || 0;
          if (currentPageSize === 12) {
            setPage((prev) => prev + 1);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreElement) {
      observer.observe(loadMoreElement);
    }

    return () => {
      if (loadMoreElement) {
        observer.unobserve(loadMoreElement);
      }
    };
  }, [isFetching, isError, data?.filteredProducts?.length]);

  // Handle loading state
  if (isLoading && page === 1) {
    return (
      <>
        <HeaderV2 />
        <div className="validtheme-shop-area default-padding text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                  <div>
                    <div className="spinner-border text-primary mb-3" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Loading products...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterV1 />
      </>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <>
        <HeaderV2 />
        <div className="validtheme-shop-area default-padding text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                  <div>
                    <i className="fas fa-exclamation-triangle text-danger mb-3" style={{ fontSize: "3rem" }}></i>
                    <p className="text-danger">
                      Error loading products:{" "}
                      {(() => {
                        if (!error) return "Unknown error";
                        if ("message" in error) return error.message;
                        if ("error" in error) return (error as any).error;
                        if ("status" in error) return `Status: ${(error as any).status}`;
                        return "Unknown error";
                      })()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterV1 />
      </>
    );
  }

  return (
    <>
      <HeaderV2 />
      <div className="validtheme-shop-area default-padding text-center">
        <div className="shape-seperate">
          <img style={{ opacity: 0.4 }} src={shape29} alt="life bites" />
          <img style={{ opacity: 0.3 }} src={shape30} alt="life bites" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">
                  {category ? `${category} Products` : "Our Products"}
                </h4>
                <h2 className="title">
                  {category ? `Explore ${category} Collection` : "Explore All Products"}
                </h2>
                {category && (
                  <p>Discover our delicious {category.toLowerCase()} products and snacks</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {allProducts.length > 0 ? (
                <>
                  <div
                    style={{ justifyContent: "stretch", alignItems: "stretch" }}
                    className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex"
                  >
                    {allProducts.map((product, index) => (
                      <div className="col h-100" key={product?._id || index}>
                        <SingleShopV1 product={product} />
                      </div>
                    ))}
                  </div>
                  {/* Element to observe for triggering next page load */}
                  {allProducts.length > 0 && (
                    <div ref={loadMoreRef} style={{ height: "20px", visibility: "hidden" }}></div>
                  )}
                  
                  {/* Load more button */}
                  {!isFetching && !loadingAll && allProducts.length > 0 && (
                    data?.filteredProductsCount && allProducts.length < data.filteredProductsCount
                  ) && (
                    <div className="text-center mt-4 px-3">
                      <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                        Showing {allProducts.length} of {data?.filteredProductsCount || 'Unknown'} total products
                      </p>
                      <button 
                        className="btn btn-primary btn-lg"
                        onClick={loadAllProducts}
                        disabled={loadingAll}
                        style={{ 
                          minWidth: "200px",
                          padding: "12px 24px",
                          fontSize: "1rem",
                          fontWeight: "600",
                          borderRadius: "25px",
                          boxShadow: "0 4px 15px rgba(237, 28, 36, 0.3)",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          if (!loadingAll) {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 6px 20px rgba(237, 28, 36, 0.4)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!loadingAll) {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 15px rgba(237, 28, 36, 0.3)";
                          }
                        }}
                      >
                        {loadingAll ? (
                          <>
                            <div className="spinner-border spinner-border-sm me-2" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                            Loading All Products...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-plus-circle me-2"></i>
                            Load All Products
                          </>
                        )}
                      </button>
                    </div>
                  )}
                  {(isFetching || loadingAll) && !loadingAll && (
                    <div className="text-center mt-4">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2">Loading more products...</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center" style={{ minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div>
                    <i className="fas fa-box-open text-muted mb-3" style={{ fontSize: "4rem" }}></i>
                    <h4 className="text-muted">No Products Found</h4>
                    <p className="text-muted">
                      {category 
                        ? `Sorry, we couldn't find any products in the ${category} category.`
                        : "No products are available at the moment."
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterV1 />
    </>
  );
};

export default ShopPage;
