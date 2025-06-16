import menu7 from "/assets/img/menu/7.jpg"
import food1 from "/assets/img/food/1.jpg"
import food2 from "/assets/img/food/2.jpg"
import food3 from "/assets/img/food/3.jpg"
import food4 from "/assets/img/food/4.jpg"
import menu8 from "/assets/img/menu/8.jpg"
import food5 from "/assets/img/food/5.jpg"
import food6 from "/assets/img/food/6.jpg"
import food7 from "/assets/img/food/7.jpg"
import food8 from "/assets/img/food/8.jpg"
import { Link } from "react-router-dom";

interface Datatype {
    sectionClass?: string;
    isDark?: boolean
}

const MenuV2 = ({ sectionClass, isDark }: Datatype) => {
    return (
        <>
            <div className={`food-menu-style-two-area default-padding bg-cover ${sectionClass}`} style={{
                backgroundImage: isDark ? 'none' : 'url(/assets/img/shape/3.jpg)',
            }}>
                <div className="container">

                    {/* Single Item */}
                    <div className="food-menu-style-two">
                        <div className="row align-center">
                            <div className="col-lg-5">
                                <div className="food-menu-style-two-thumb">
                                    <img src={menu7} alt="Image Not Found" data-aos="fade-left" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="food-menu-style-two-content" data-aos="fade-up">
                                    <h4 className="sub-heading">Fast Food Items</h4>
                                    <ul className="meal-type">
                                        <li>Half</li>
                                        <li>Full</li>
                                    </ul>
                                    <ul className="meal-items">
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food1} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Chicken Alfredo</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$20</span>
                                                        <span>$30</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Ricotta / goat cheese / beetroot
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food2} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Fish & Chips</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$36</span>
                                                        <span>$55</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Atlantic / chips / salad /tartare
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food3} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Ebony Fillet Steak</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$44</span>
                                                        <span>$88</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Truffle mash / pepper sauce.
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food4} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Chicken Alfredo</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$20</span>
                                                        <span>$30</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Ricotta / goat cheese / beetroot
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Item */}
                    <div className="food-menu-style-two">
                        <div className="row align-center">
                            <div className="col-lg-5">
                                <div className="food-menu-style-two-thumb">
                                    <img src={menu8} alt="Image Not Found" data-aos="fade-right" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="food-menu-style-two-content" data-aos="fade-up">
                                    <h4 className="sub-heading">Dessert Items</h4>
                                    <ul className="meal-type">
                                        <li>Half</li>
                                        <li>Full</li>
                                    </ul>
                                    <ul className="meal-items">
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food5} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Cupcakes</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$10</span>
                                                        <span>$20</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Ricotta / goat cheese / beetroot
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food6} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Brownies</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$16</span>
                                                        <span>$34</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Atlantic / chips / salad /tartare
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food7} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Muffins</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$22</span>
                                                        <span>$36</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Truffle mash / pepper sauce.
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumbnail">
                                                <img src={food8} alt="Image Not Found" />
                                            </div>
                                            <div className="content">
                                                <div className="top">
                                                    <div className="title">
                                                        <h4><Link to="/shop">Cheesecakes</Link></h4>
                                                    </div>
                                                    <div className="price">
                                                        <span>$34</span>
                                                        <span>$66</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="left">
                                                        <p>
                                                            Ricotta / goat cheese / beetroot
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <p>
                                                            Extra Free Juice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default MenuV2;