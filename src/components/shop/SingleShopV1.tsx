import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";
import { addToCart } from "../../store/features/cartSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
}

const SingleShopV1 = ({ product }: { product: DataType }) => {
  const { _id, name, variants, images, badge, tags } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    variants.find((v) => v.stock > 0)?.size || ""
  );

  // Filter variants with stock > 0
  const availableVariants = variants.filter((variant) => variant.stock > 0);

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
    images && images.length > 0 ? images[0].url : "/assets/img/placeholder.jpg";
  const isOutOfStock = availableVariants.length === 0;

  const handleAddToCart = (variantSize: string) => {
    const variant = variants.find((v) => v.size === variantSize);
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
            {/* <button
              type="button"
              className=""
              onClick={() => setShowVariantModal(false)}
            >
              Close
            </button> */}
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
      <li className="product">
        <div className="product-contents">
          <div className="product-image">
            <span className={badge === "" || !badge ? "d-none" : "onsale"}>
              {badge}
            </span>
            <Link to={`/shop-single-thumb/${_id}`}>
              <img
                src={thumb}
                alt={name || "Product"}
                width={450}
                height={450}
              />
            </Link>
            <div className="shop-action">
              <ul>
                <li className="cart">
                  <Link to="#" onClick={handleCartClick}>
                    <span>{isOutOfStock ? "Out of Stock" : "Add to Cart"}</span>
                  </Link>
                </li>
                <li className="quick-view">
                  <Link to={`/shop-single-thumb/${_id}`}>
                    <span>Quick view</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-caption">
            <div className="product-tags">
              {tags && tags.length > 0 ? (
                tags.map((data, index) => (
                  <Link to="#" key={index}>
                    {data}
                    {index < tags.length - 1 && ","}
                  </Link>
                ))
              ) : (
                <></>
              )}
            </div>
            <h4 className="product-title">
              <Link to={`/shop-single-thumb/${_id}`}>{name}</Link>
              {displayVariant.size && (
                <p className="text-center fs-6 text-muted">
                  ({displayVariant.size})
                </p>
              )}
            </h4>
            <div className="price">
              {oldPrice !== undefined && (
                <span>
                  <del>₹{oldPrice.toFixed(2)}</del>
                </span>
              )}
              <span>₹{price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </li>
      {showVariantModal && <VariantModal />}
    </>
  );
};

export default SingleShopV1;
