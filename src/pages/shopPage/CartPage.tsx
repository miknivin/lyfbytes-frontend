import CartPageContent from "../../components/cart/CartPageContent";
import LayoutV5 from "../../components/layouts/LayoutV5";

const CartPage = () => {
  return (
    <>
      <LayoutV5 title="Cart Page" breadCrumb="cart">
        <CartPageContent />
      </LayoutV5>
    </>
  );
};

export default CartPage;
