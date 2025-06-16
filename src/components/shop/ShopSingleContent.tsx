// import RelatedProducts from "../product/RelatedProducts";
// import ShopSingleTab from "./ShopSingleTab";
// import { Link } from "react-router-dom";
// import RatingsStar from "../utilities/RatingsStar";
// import ProductCarousel from "../product/ProductCarousel";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
// import { addToCart } from "../../store/features/cartSlice";
// import { toast } from "react-toastify";
// import { useState } from "react";

interface DataType {
  id?: number;
  thumb?: string;
  badge?: string;
  tags: string[];
  name?: string;
  price?: string;
  oldPrice?: string;
  ratings: number;
  reviews?: number;
}

const ShopSingleContent = ({ productInfo }: { productInfo: DataType }) => {
  console.log(productInfo);

  // const { name, reviews, ratings, oldPrice, price, tags } = productInfo;
  // const dispatch = useDispatch();
  // const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  // const [quantity, setQuantity] = useState(1);
  // const handleAddToCart = () => {
  //   const alreadyInCart = cartItems.some((item) => item.id === productInfo.id);
  //   if (alreadyInCart) {
  //     toast.warning("Product already in cart");
  //   } else {
  //     dispatch(
  //       addToCart({
  //         id: productInfo.id!,
  //         title: productInfo.name!,
  //         price: parseFloat(productInfo.price!.replace("$", "")),
  //         thumb: productInfo.thumb!,
  //         quantity,
  //       })
  //     );
  //     toast.success("Product added successfully");
  //   }
  // };
  // return (
  //   <div className="validtheme-shop-single-area default-padding">
  //     <div className="container">
  //       <div className="product-details">
  //         <div className="row">
  //           <div className="col-lg-6">
  //             <div className="product-thumb">
  //               <div
  //                 id="timeline-carousel"
  //                 className="carousel slide"
  //                 data-bs-ride="carousel"
  //               >
  //                 <ProductCarousel />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="col-lg-6">
  //             <div className="single-product-contents">
  //               <div className="summary-top-box">
  //                 <div className="product-tags">
  //                   {tags &&
  //                     tags.map((data, index) => (
  //                       <Link key={index} to="#">
  //                         {data}
  //                         {index < tags.length - 1 && ","}
  //                       </Link>
  //                     ))}
  //                 </div>
  //                 <div className="review-count">
  //                   <RatingsStar ratings={ratings} />
  //                   <span>({reviews} Review)</span>
  //                 </div>
  //               </div>
  //               <h2 className="product-title">{name}</h2>
  //               <div className="price">
  //                 <span className={`${oldPrice === "" ? "d-none" : ""} me-2`}>
  //                   <del>${oldPrice}</del>
  //                 </span>
  //                 <span>${price}</span>
  //               </div>
  //               <div className="product-stock validthemes-in-stock">
  //                 <span>In Stock</span>
  //               </div>
  //               <p>
  //                 The Aspire 5 is a compact laptop in a thin case with a metal
  //                 cover, a high-quality Full HD IPS display and a rich set of
  //                 interfaces. Thanks to its powerful components, the laptop can
  //                 handle resource-intensive tasks perfectly and is also suitable
  //                 for most games. non-characteristic words etc. Susp endisse
  //                 ultricies nisi vel quam suscipit. Sabertooth peacock flounder
  //               </p>
  //               <div className="product-purchase-list">
  //                 <input
  //                   type="number"
  //                   id="quantity"
  //                   step={1}
  //                   name="quantity"
  //                   min={1}
  //                   value={quantity}
  //                   onChange={(e) => setQuantity(Number(e.target.value))}
  //                   placeholder="0"
  //                 />
  //                 <Link
  //                   to="#"
  //                   className="btn secondary btn-theme btn-sm animation"
  //                   onClick={handleAddToCart}
  //                 >
  //                   <i className="fas fa-shopping-cart" />
  //                   Add to cart
  //                 </Link>
  //                 <div className="shop-action">
  //                   <ul>
  //                     <li className="wishlist">
  //                       <Link to="#">
  //                         <span>Add to wishlist</span>
  //                       </Link>
  //                     </li>
  //                     <li className="compare">
  //                       <Link to="#">
  //                         <span>Compare</span>
  //                       </Link>
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div>
  //               <div className="product-estimate-delivary">
  //                 <i className="fas fa-box-open" />
  //                 <strong> 2-day Delivery</strong>
  //                 <span>Speedy and reliable parcel delivery!</span>
  //               </div>
  //               <div className="product-meta">
  //                 <span className="sku">
  //                   <strong>SKU:</strong> BE45VGRT
  //                 </span>
  //                 <span className="posted-in">
  //                   <strong>Category:</strong>
  //                   <Link to="#">Computer</Link> ,<Link to="#">Speaker</Link>,
  //                   <Link to="#">Headphone</Link>
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <ShopSingleTab />
  //       <RelatedProducts />
  //     </div>
  //   </div>
  // );
};

export default ShopSingleContent;
