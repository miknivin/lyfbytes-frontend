import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";
import { addToCart } from "../../store/features/cartSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";

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

const BestSellerCard = ({ product }: { product: DataType }) => {
  const { _id, name, variants, images, ratings, numOfReviews } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    variants?.find((v) => v.stock > 0)?.size || ""
  );

  // Safety check for missing product data
  if (!product || !_id || !name) {
    console.log("Invalid product data:", product);
    return null;
  }

  const CLOUD_FRONT_BASE_URL = "https://d229x2i5qj11ya.cloudfront.net";
  const transformImageUrl = (url: string) => {
    if (url.includes("kids-bags.s3.eu-north-1.amazonaws.com")) {
      const path = url.split("/uploads")[1];
      return `${CLOUD_FRONT_BASE_URL}/uploads${path}`;
    }
    return url;
  };

  // Filter variants with stock > 0
  const availableVariants = variants?.filter((variant) => variant.stock > 0) || [];

  // Get the first available variant for price display
  const displayVariant =
    availableVariants.length > 0
      ? availableVariants[0]
      : { actualPrice: 0, offer: undefined, stock: 0, size: "" };

  const price = displayVariant.offer || displayVariant.actualPrice;
  const oldPrice = displayVariant.offer
    ? displayVariant.actualPrice
    : undefined;
  const thumb =
    images && images.length > 0
      ? transformImageUrl(images[0].url)
      : "/assets/img/placeholder.jpg";
  const isOutOfStock = availableVariants.length === 0;

  // Calculate discount percentage
  const discountPercentage = oldPrice 
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const productRating = ratings || 0;
    const fullStars = Math.floor(productRating);
    const hasHalfStar = productRating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-warning" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-warning" style={{ opacity: 0.5 }} />
        );
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-muted" />
        );
      }
    }
    return stars;
  };

  const handleAddToCart = (variantSize: string) => {
    const variant = variants?.find((v) => v.size === variantSize);
    if (!variant) {
      toast.error("Please select a valid variant");
      return;
    }

    const alreadyInCart = cartItems.some(
      (item) => item.product === _id && item.variant === variant.size
    );

    if (alreadyInCart) {
      toast.warning(`Product (${variant.size}) already in cart`);
    } else if (variant.stock === 0) {
      toast.error(`Product (${variant.size}) out of stock`);
    } else {
      dispatch(
        addToCart({
          product: _id,
          name,
          price: variant.offer || variant.actualPrice,
          image: thumb,
          quantity: 1,
          variant: variant.size,
          stock: variant.stock,
        })
      );
      toast.success(`Product (${variant.size}) added successfully`);
      setShowVariantModal(false);
    }
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOutOfStock) {
      toast.error("Product out of stock");
      return;
    }
    if (availableVariants.length === 1) {
      handleAddToCart(availableVariants[0].size);
    } else if (availableVariants.length > 1) {
      setShowVariantModal(true);
    }
  };

  const VariantModal = () => (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select Variant for {name}</h5>
            <button
              type="button"
              className="btn-close d-flex justify-content-center align-items-center"
              onClick={() => setShowVariantModal(false)}
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="modal-body">
            <div className="variant-selection">
              {availableVariants.length > 0 ? (
                availableVariants.map((variant) => (
                  <div
                    className="form-check mb-2 d-flex gap-3"
                    key={variant.size}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      style={{ minHeight: "auto" }}
                      name="variant"
                      id={`variant-${variant.size}`}
                      value={variant.size}
                      checked={selectedVariant === variant.size}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`variant-${variant.size}`}
                    >
                      {variant.size} (₹{variant.offer || variant.actualPrice},
                      Stock: {variant.stock})
                    </label>
                  </div>
                ))
              ) : (
                <p>No variants available</p>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleAddToCart(selectedVariant)}
              disabled={!selectedVariant}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="best-seller-card h-100">
        <div className="card h-100 border shadow-sm position-relative overflow-hidden d-flex flex-column" 
             style={{ 
               transition: 'all 0.3s ease',
               cursor: 'pointer',
               borderRadius: '8px',
               minHeight: '420px',
               width: '100%'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.transform = 'translateY(-5px)';
               e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.boxShadow = '';
             }}>
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="position-absolute top-0 start-0 m-1" style={{ zIndex: 2 }}>
              <span className="badge bg-primary text-white px-2 py-1" style={{ fontSize: '0.65rem', borderRadius: '4px' }}>
                {discountPercentage}% OFF
              </span>
            </div>
          )}
          
          {/* Product Image */}
          <div className="text-center p-3" style={{ height: "200px", flexShrink: 0 }}>
            <Link to={`/shop-single-thumb/${_id}`}>
              <img
                src={thumb}
                alt={name || "Product"}
                className="img-fluid h-100"
                style={{ 
                  objectFit: "contain",
                  transition: 'transform 0.3s ease',
                  maxWidth: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </Link>
          </div>

          {/* Card Body */}
          <div className="card-body text-center p-3 d-flex flex-column justify-content-between flex-grow-1">
            <div>
              {/* Product Name */}
              <h6 className="card-title fw-bold text-uppercase mb-2" 
                  style={{ 
                    fontSize: '0.85rem', 
                    lineHeight: '1.2',
                    height: '2.4em',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                <Link 
                  to={`/shop-single-thumb/${_id}`} 
                  className="text-decoration-none text-dark"
                  style={{ 
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#dc3545';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >
                  {name}
                </Link>
              </h6>

              {/* Rating */}
              <div className="mb-2">
                <div className="d-flex justify-content-center align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
                  {renderStars()}
                </div>
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                  ({numOfReviews || Math.floor(Math.random() * 100) + 20})
                </span>
              </div>

              {/* Price */}
              <div className="mb-3">
                {oldPrice && (
                  <div className="text-muted text-decoration-line-through" style={{ fontSize: '0.8rem' }}>
                    ₹{oldPrice.toFixed(2)}
                  </div>
                )}
                <div className="fw-bold text-primary" style={{ fontSize: '0.95rem' }}>
                  From ₹{price.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="btn btn-danger w-100 mt-auto d-flex align-items-center justify-content-center"
              style={{ 
                fontSize: '0.75rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: 'none',
                padding: '8px 10px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                minHeight: '36px',
                textAlign: 'center',
                lineHeight: '1'
              }}
              onClick={handleCartClick}
              disabled={isOutOfStock}
              onMouseEnter={(e) => {
                if (!isOutOfStock) {
                  e.currentTarget.style.backgroundColor = '#bb2d3b';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isOutOfStock ? "Out of Stock" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
      {showVariantModal && <VariantModal />}
    </>
  );
};

export default BestSellerCard;
