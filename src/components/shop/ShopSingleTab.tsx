import { Link } from "react-router-dom";
import ReviewForm from "../form/ReviewForm";
import { DataType } from "./../../pages/shopPage/ShopSingleThumbPage";
import DOMPurify from "dompurify";
import TestimonialV2 from "../testimonial/TestimonialV2";

const ShopSingleTab = ({ productInfo }: { productInfo: DataType }) => {
  return (
    <div className="single-product-bottom-info">
      <div className="row">
        <div className="col-lg-12">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active tab-button"
              id="description-tab-control"
              data-bs-toggle="tab"
              data-bs-target="#description-tab"
              type="button"
              role="tab"
              aria-controls="description-tab"
              aria-selected="true"
            >
              Description
            </button>
            <button
              className="nav-link tab-button"
              id="information-tab-control"
              data-bs-toggle="tab"
              data-bs-target="#information-tab"
              type="button"
              role="tab"
              aria-controls="information-tab"
              aria-selected="false"
            >
              Additional Information
            </button>
            <button
              className="nav-link tab-button"
              id="review-tab-control"
              data-bs-toggle="tab"
              data-bs-target="#review-tab"
              type="button"
              role="tab"
              aria-controls="review-tab"
              aria-selected="false"
            >
              Review
            </button>
          </div>
          <div className="tab-content tab-content-info" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="description-tab"
              role="tabpanel"
              aria-labelledby="description-tab-control"
            >
              <div className="description-content">
                {productInfo?.details?.additionalDescription ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        productInfo.details.additionalDescription
                      ),
                    }}
                  />
                ) : (
                  <p>No description available</p>
                )}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="information-tab"
              role="tabpanel"
              aria-labelledby="information-tab-control"
            >
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    {Object.entries(productInfo.specifications || {}).map(
                      ([key, value], index) => (
                        <tr key={index}>
                          <td>{key}</td>
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="review-tab"
              role="tabpanel"
              aria-labelledby="review-tab-control"
            >
              {/* <h4>1 review for “{productInfo.name}”</h4>
              <div className="review-items">
                <div className="item">
                  <div className="thumb">
                    <img src="/assets/img/team/1.jpg" alt="Thumb" />
                  </div>
                  <div className="info">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="review-date">April 8, 2021</div>
                    <div className="review-authro">
                      <h5>Aleesha</h5>
                    </div>
                    <p>Highly recommended. Will purchase more in future.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src="/assets/img/team/2.jpg" alt="Thumb" />
                  </div>
                  <div className="info">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <div className="review-date">April 8, 2021</div>
                    <div className="review-authro">
                      <h5>Sarah Albert</h5>
                    </div>
                    <p>Auth!</p>
                  </div>
                </div>
              </div>
              <div className="review-form">
                <h4>Add a review</h4>
                <div className="rating-select">
                  <div className="stars">
                    <span>
                      <Link className="star-1" to="#">
                        <i className="fas fa-star" />
                      </Link>
                      <Link className="star-2" to="#">
                        <i className="fas fa-star" />
                      </Link>
                      <Link className="star-3" to="#">
                        <i className="fas fa-star" />
                      </Link>
                      <Link className="star-4" to="#">
                        <i className="fas fa-star" />
                      </Link>
                      <Link className="star-5" to="#">
                        <i className="fas fa-star" />
                      </Link>
                    </span>
                  </div>
                </div>
                <ReviewForm />
              </div> */}
              <TestimonialV2 hasBg={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSingleTab;
