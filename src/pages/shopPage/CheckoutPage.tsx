import CheckoutContent from "../../components/cart/CheckoutContent";
import LayoutV5 from "../../components/layouts/LayoutV6";

const CheckoutPage = () => {
  return (
    <>
      <LayoutV5 title="Checkout Page" breadCrumb="checkout">
        <CheckoutContent />
      </LayoutV5>
    </>
  );
};

export default CheckoutPage;
