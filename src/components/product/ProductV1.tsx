import ProductV1Data from "../../assets/jsonData/product/ProductV1Data.json"
import SingleProductV1 from "./SingleProductV1";

const ProductV1 = () => {
    return (
        <>
            <div className="special-product-area default-padding bottom-less bg-gray text-center bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/4.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Top Special</h4>
                                <h2 className="title">Our Specials Menu</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ProductV1Data.map(product =>
                            <div className="col-xl-3 col-lg-6 col-md-6 mb-30" key={product.id}>
                                <SingleProductV1 product={product} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductV1;