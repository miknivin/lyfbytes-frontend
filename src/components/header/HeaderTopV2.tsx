import icon10 from "/assets/img/icon/10.png";
import icon11 from "/assets/img/icon/11.png";

interface DataType {
  sectionClass?: string;
}

const HeaderTopV2 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`top-bar-area top-bar-style-one bg-theme text-light ${sectionClass}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-7">
              <ul className="item-flex">
                <li>
                  <a href="tel:9847004200">
                    <img src={icon10} alt="Icon" /> Phone: 9847004200
                  </a>
                </li>
                <li>
                  <a href="mailto:name@email.com">
                    <img src={icon11} alt="Icon" /> Email: food@restan.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 text-end">
              <p>
                <i className="fas fa-map-marker-alt" /> 175 10h Street, Office
                375 Berlin, De 21562
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopV2;
