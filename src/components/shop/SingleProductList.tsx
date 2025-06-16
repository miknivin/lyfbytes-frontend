// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToCart } from "../../store/features/cartSlice";
// import { toast } from "react-toastify";
// import { RootState } from "../../store/store";

// interface DataType {
//   id?: number;
//   thumb?: string;
//   badge?: string;
//   tags?: string[] | undefined;
//   name?: string;
//   price?: string;
//   oldPrice?: string;
// }

const SingleProductList = ({ product }: { product: any }) => {
  console.log(product);

  // const { id, thumb, badge, tags, name, price } = product;
  // const dispatch = useDispatch();
  // const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  // const handleAddToCart = () => {
  //   const alreadyInCart = cartItems.some(
  //     (item) => item.product === product._id
  //   );
  //   if (alreadyInCart) {
  //     toast.warning("Product already in cart");
  //   } else {
  //     dispatch(
  //       addToCart({
  //         product: product.id!,
  //         name: product.name!,
  //         price: parseFloat(product.price!.replace("$", "")),
  //         image: product.thumb!,
  //         quantity: 1,
  //       })
  //     );
  //     toast.success("Product added successfully");
  //   }
  // };
  // return (
  //   <li className="product">
  //     <div className="product-contents">
  //       <div className="row align-center">
  //         <div className="col-lg-5 col-md-5">
  //           <div className="product-image">
  //             <span className={badge === "" ? "d-none" : "onsale"}>
  //               {badge}
  //             </span>
  //             <Link to={`/shop-single-thumb/${id}`}>
  //               <img
  //                 src={`/assets/img/shop/${thumb}`}
  //                 alt="Product"
  //                 width={450}
  //                 height={450}
  //               />
  //             </Link>
  //             <div className="shop-action">
  //               <ul>
  //                 <li className="cart">
  //                   <Link to="#" onClick={handleAddToCart}>
  //                     <span>Add to cart</span>
  //                   </Link>
  //                 </li>
  //                 <li className="wishlist">
  //                   <Link to="#">
  //                     <span>Add to wishlist</span>
  //                   </Link>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-lg-7 col-md-7">
  //           <div className="product-caption">
  //             <div className="product-tags">
  //               {tags && tags.length > 0 ? (
  //                 tags.map((data, index) => (
  //                   <Link to="#" key={index}>
  //                     {data}
  //                   </Link>
  //                 ))
  //               ) : (
  //                 <></>
  //               )}
  //             </div>
  //             <h4 className="product-title">
  //               <Link to={`/shop-single-thumb/${id}`}>{name}</Link>
  //             </h4>
  //             <div className="price">
  //               <span>${price}</span>
  //             </div>
  //             <Link to="#" className="cart-btn" onClick={handleAddToCart}>
  //               <i className="fas fa-shopping-bag" />
  //               Add to cart
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </li>
  // );
};

export default SingleProductList;
