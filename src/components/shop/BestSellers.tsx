import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../store/api/productApi";
import BestSellerCard from "../shop/BestSellerCard";
import "./BestSellers.css";
import "./EqualHeightCards.css";

const BestSellers = () => {
  const [bestProducts, setBestProducts] = useState<any[]>([]);

  // Fetch products - remove the ratings filter to get more products
  const { data, isLoading, isError, error } = useGetProductsQuery({
    page: 1,
    resPerPage: 8,
  });

  useEffect(() => {
    if (data?.filteredProducts) {
      console.log("Products fetched:", data.filteredProducts.length);
      // Sort by ratings in descending order and take top products
      const sortedProducts = [...data.filteredProducts]
        .filter((product) => product.ratings && product.ratings > 0) // Filter products with ratings
        .sort((a, b) => (b.ratings || 0) - (a.ratings || 0))
        .slice(0, 8); // Show top 8 best sellers
      
      // If no products with ratings, just take the first 8 products
      if (sortedProducts.length === 0) {
        setBestProducts(data.filteredProducts.slice(0, 8));
      } else {
        setBestProducts(sortedProducts);
      }
      console.log("Best products set:", sortedProducts.length || data.filteredProducts.slice(0, 8).length);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="best-sellers-area default-padding text-center">
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

  if (isError) {
    console.error("Error loading products:", error);
    return (
      <div className="best-sellers-area default-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Error loading best sellers</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Don't render if no products
  if (!bestProducts || bestProducts.length === 0) {
    console.log("No best products to display");
    return null;
  }

  return (
    <div className="best-sellers-area default-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center mb-5">
              <h4 className="sub-title text-primary text-uppercase fw-bold">Top Rated</h4>
              <h2 className="title text-dark fw-bold mb-3">Best Sellers</h2>
              <p className="text-muted fs-6 fs-md-5">Discover our most popular and highly-rated products loved by customers worldwide</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row row-cols-2 row-cols-md-4 g-3 d-flex equal-height-cards" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {bestProducts.map((product, index) => (
                <div className="col" key={product?._id || index} style={{ 
                  display: 'flex', 
                  height: '450px', 
                  minHeight: '450px', 
                  maxHeight: '450px' 
                }}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <BestSellerCard product={{...product, isBestSeller: true}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
