import ProductData from "../../assets/jsonData/product/ProductData.json";
import SingleShopV1 from "./SingleShopV1";
import ProductCardList from "./ProductCardList";
import Pagination from "react-paginate";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ShopPageContent = () => {
  const navigate = useNavigate();
  const { page } = useParams<{ page?: string }>();

  const currentPageNumber = Number(page) || 1;
  const [currentPage, setCurrentPage] = useState(currentPageNumber);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    setCurrentPage(currentPageNumber);
  }, [currentPageNumber]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProductData = ProductData.slice(startIndex, endIndex);

  const handlePageClick = (data: any) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
    navigate(`/shop?page=${selectedPage}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const totalPages = Math.ceil(ProductData.length / itemsPerPage);

  return (
    <div className="validtheme-shop-area default-padding">
      <div className="container">
        <div className="shop-listing-contentes">
          <div className="row item-flex center">
            <div className="col-lg-7">
              <div className="content">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="grid-tab-control"
                      data-bs-toggle="tab"
                      data-bs-target="#grid-tab"
                      type="button"
                      role="tab"
                      aria-controls="grid-tab"
                      aria-selected="true"
                    >
                      <i className="fas fa-th-large" />
                    </button>
                    <button
                      className="nav-link"
                      id="list-tab-control"
                      data-bs-toggle="tab"
                      data-bs-target="#list-tab"
                      type="button"
                      role="tab"
                      aria-controls="list-tab"
                      aria-selected="false"
                    >
                      <i className="fas fa-th-list" />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-lg-5 text-right">
              <p>
                Showing {startIndex + 1}–
                {Math.min(endIndex, ProductData.length)} of {ProductData.length}{" "}
                results
              </p>
              <select name="cars" id="cars">
                <option value="volvo">Sort by latest</option>
                <option value="saab">Sort by Recent</option>
                <option value="mercedes">Sort by Popular</option>
                <option value="audi">Sort by Relevant</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="tab-content tab-content-info text-center"
              id="shop-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="grid-tab"
                role="tabpanel"
                aria-labelledby="grid-tab-control"
              >
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                  {currentProductData.map((product: any) => (
                    <div className="col h-100" key={product.id}>
                      <SingleShopV1 product={product} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="list-tab"
                role="tabpanel"
                aria-labelledby="list-tab-control"
              >
                <div className="row g-3">
                  {currentProductData.map((product: any) => (
                    <div className="col-12" key={product.id}>
                      <ProductCardList product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <nav className="woocommerce-pagination mt-60">
              <Pagination
                previousLabel={
                  currentPage === 1 ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-left"></i>
                  )
                }
                nextLabel={
                  currentPage === totalPages ? (
                    <i className="fas fa-ban"></i>
                  ) : (
                    <i className="fas fa-angle-double-right"></i>
                  )
                }
                breakLabel={"..."}
                pageCount={Math.ceil(ProductData.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination text-center"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageContent;
