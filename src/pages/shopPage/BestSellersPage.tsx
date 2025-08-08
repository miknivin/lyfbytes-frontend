import HeaderV2 from "../../components/header/HeaderV2";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import BestSellersV1 from "../../components/shop/BestSellersV1";

const BestSellersPage = () => {
  return (
    <>
      <HeaderV2 />
      <BreadCrumb title="Best Sellers" />
      <BestSellersV1 />
      <FooterV1 />
    </>
  );
};

export default BestSellersPage;
