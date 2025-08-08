import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart, setQuantityChange } from "../../store/features/cartSlice";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import ShopSingleTab from "./ShopSingleTab";
import RatingsStar from "../utilities/RatingsStar";
import ProductImageGallery from "./ProductImageGallery";
import ProductTags from "./ProductTags";

// Define interfaces for TypeScript
interface Variant {
  size?: string;
  actualPrice: number;
  offer?: number;
  stock: number;
}

export interface DataType {
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

interface CartItem {
  id: string;
  variant: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

// Extend RootState to include cartItems

const ShopSingleThumbContent = ({ productInfo }: { productInfo: DataType }) => {
  const { _id, name, ratings, numOfReviews, images, variants, tags, badge } =
    productInfo;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);


  // Set the first variant with stock > 0 as default
  useEffect(() => {
    const firstAvailableVariant = variants.find((v) => v.stock > 0);
    setSelectedVariant(firstAvailableVariant || variants[0] || null);
  }, [variants]);

  // Get price and image details from selected variant
  const price = selectedVariant?.offer ?? selectedVariant?.actualPrice ?? 0;
  const oldPrice = selectedVariant?.offer
    ? selectedVariant?.actualPrice
    : undefined;
  const thumb =
    images.length > 0 ? images[0].url : "/assets/img/placeholder.jpg";

  const getReviewCount = (numOfReviews: number) => {
    return numOfReviews === 0
      ? Math.floor(Math.random() * (100 - 20 + 1)) + 20
      : numOfReviews ?? 20;
  };

  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast.error("No variant selected");
      return;
    }

    const alreadyInCart = cartItems.some(
      (item) => item.product === _id && item.variant === selectedVariant.size
    );

    if (alreadyInCart) {
      toast.warning("This variant is already in cart");
    } else if (selectedVariant.stock === 0) {
      toast.error("Selected variant is out of stock");
    } else {
      dispatch(
        addToCart({
          product: _id,
          name,
          price,
          image: thumb,
          quantity,
          variant: selectedVariant.size ?? "N/A",
          stock: selectedVariant.stock,
        })
      );
      toast.success("Product added successfully");
    }
  };

  return (
    <div className="validtheme-shop-single-area default-padding">
      <div className="container">
        <div className="product-details">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-thumb">
                <div className="item-box">
                  <div className="product-item">
                    <ProductImageGallery images={images} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-product-contents">
                <div className="summary-top-box">
                  <ProductTags 
                    tags={tags} 
                    productName={name}
                    layout="horizontal"
                    maxTags={8}
                    showIcon={true}
                    clickable={true}
                  />
                  <div className="review-count">
                    <RatingsStar ratings={ratings} />
                    <span>
                      ({getReviewCount(numOfReviews)} Review
                      {getReviewCount(numOfReviews) !== 1 ? "s" : ""})
                    </span>
                  </div>
                </div>
                <h2 className="product-title">{name}</h2>
                <div className="price">
                  {oldPrice !== undefined && (
                    <span className="me-2">
                      <del>₹{oldPrice.toFixed(2)}</del>
                    </span>
                  )}
                  <span>₹{price.toFixed(2)}</span>
                </div>
                <div className="product-stock validthemes-in-stock">
                  <span>
                    {selectedVariant?.stock && selectedVariant?.stock > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </span>
                </div>
                <p>{productInfo.details.ingredientsDescription ?? ""}</p>
                {variants.length > 0 && (
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    {variants
                      .filter((variant) => variant.stock > 0)
                      .map((variant, index) => (
                        <button
                          key={`${variant.size ?? "variant"}_${index}`}
                          className={`card p-2`}
                          style={{
                            width: "10rem",
                            cursor: "pointer",
                            border:
                              selectedVariant?.size === variant.size
                                ? "2px solid #eb0029"
                                : "1px solid #ddd",
                          }}
                          onClick={() => setSelectedVariant(variant)}
                        >
                          <div className="card-body variant-button p-2 text-center">
                            <h5 className="card-title mb-1">
                              {variant.size ?? "N/A"}
                            </h5>
                            <h6 className="card-subtitle mb-0 mt-2 variant-button d-flex justify-content-center align-items-center">
                              <del className="text-danger">
                                ₹{variant.actualPrice ?? 500}
                              </del>{" "}
                              <p className="variant-button-price">
                                ₹{variant.offer ?? 100}
                              </p>
                            </h6>
                          </div>
                        </button>
                      ))}
                  </div>
                )}
                <div className="product-purchase-list align-items-start flex-column gap-4">
                  <div className="wg-quantity">
                    <span
                      className="btn-quantity minus-btn"
                      onClick={() => {
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
                        dispatch(setQuantityChange({ isIncreasing: false }));
                      }}
                    >
                      -
                    </span>
                    <input
                      min={1}
                      type="text"
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      name="number"
                      value={quantity}
                      placeholder="0"
                      aria-label="Quantity"
                    />
                    <span
                      className="btn-quantity plus-btn"
                      onClick={() => {
                        setQuantity((prev) => prev + 1);
                        dispatch(setQuantityChange({ isIncreasing: true }));
                      }}
                    >
                      +
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn secondary btn-theme btn-sm animation"
                    onClick={handleAddToCart}
                    disabled={!selectedVariant || selectedVariant.stock === 0}
                  >
                    <i className="fas fa-shopping-cart" />
                    Add to cart
                  </button>
                </div>
                <div className="product-estimate-delivary">
                  <i className="fas fa-box-open" />
                  {/* <strong> 2-day Delivery</strong> */}
                  <span className="p-0">
                    Speedy and reliable parcel delivery!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShopSingleTab productInfo={productInfo} />
      </div>
    </div>
  );
};

export default ShopSingleThumbContent;
