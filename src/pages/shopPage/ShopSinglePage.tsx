// import LayoutV5 from "../../components/layouts/LayoutV6";
// import ShopSingleContent from "../../components/shop/ShopSingleContent";
import ProductData from "../../assets/jsonData/product/ProductData.json";
import { useParams } from "react-router-dom";

const ShopSinglePage = () => {
  const { id } = useParams();
  const data = ProductData.find(
    (product) => product.id === parseInt(id || "0")
  );

  return (
    <>
      {/* <LayoutV5 title="Grilled Flank Steak" breadCrumb="shop-single-2">
        {data && <ShopSingleContent productInfo={data} />}
        {!data && <div>Product Not Found</div>}
      </LayoutV5> */}
    </>
  );
};

export default ShopSinglePage;
