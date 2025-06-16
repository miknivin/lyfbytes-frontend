import icon2 from "/assets/img/icon/2.png"
import thumb6 from "/assets/img/thumb/6.jpg"
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const MenuV5 = () => {
    return (
        <>
            <div className="menu-style-five-area default-padding bg-cover">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="thumb-style-two">
                                <div className="fun-fact-style-two mb-40">
                                    <div className="icon">
                                        <img src={icon2} alt="Image Not Found" />
                                    </div>
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={500} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Menu and Dishes</span>
                                    </div>
                                </div>
                                <img data-aos="fade-left" src={thumb6} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-6">
                            <h4 className="sub-heading">Food Items</h4>
                            <h2 className="title">Starters & Main Dishes</h2>
                            <div className="food-menu-style-five-items mt-65" data-aos="fade-up">
                                <ul className="nav nav-tabs food-menu-five-navs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="tab_1" data-bs-toggle="tab" data-bs-target="#tabs_1" type="button" role="tab" aria-controls="tabs_1" aria-selected="true">
                                            Main Dishes
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="tab_2" data-bs-toggle="tab" data-bs-target="#tabs_2" type="button" role="tab" aria-controls="tabs_2" aria-selected="false">
                                            Desserts
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="tab_3" data-bs-toggle="tab" data-bs-target="#tabs_3" type="button" role="tab" aria-controls="tabs_3" aria-selected="false">
                                            Sea Food
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="tab_4" data-bs-toggle="tab" data-bs-target="#tabs_4" type="button" role="tab" aria-controls="tabs_4" aria-selected="false">
                                            Beverage
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tabs_1" role="tabpanel" aria-labelledby="tab_1">
                                        <ul className="meal-type">
                                            <li>Half</li>
                                            <li>Full</li>
                                        </ul>
                                        <ul className="meal-items style-two">
                                            <li>
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
                                    <div className="tab-pane fade" id="tabs_2" role="tabpanel" aria-labelledby="tab_2">
                                        <ul className="meal-type">
                                            <li>Half</li>
                                            <li>Full</li>
                                        </ul>
                                        <ul className="meal-items style-two">
                                            <li>
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
                                    <div className="tab-pane fade" id="tabs_3" role="tabpanel" aria-labelledby="tab_3">
                                        <ul className="meal-type">
                                            <li>Half</li>
                                            <li>Full</li>
                                        </ul>
                                        <ul className="meal-items style-two">
                                            <li>
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">Salmon Fry</Link></h4>
                                                        </div>
                                                        <div className="price">
                                                            <span>$40</span>
                                                            <span>$70</span>
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
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">Pangasius or Basa</Link></h4>
                                                        </div>
                                                        <div className="price">
                                                            <span>$15</span>
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
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">Clams</Link></h4>
                                                        </div>
                                                        <div className="price">
                                                            <span>$45</span>
                                                            <span>$78</span>
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
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">Red Crab</Link></h4>
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
                                    <div className="tab-pane fade" id="tabs_4" role="tabpanel" aria-labelledby="tab_4">
                                        <ul className="meal-type">
                                            <li>Half</li>
                                            <li>Full</li>
                                        </ul>
                                        <ul className="meal-items style-two">
                                            <li>
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">Wine</Link></h4>
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
                                            <li>
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">Coffee</Link></h4>
                                                        </div>
                                                        <div className="price">
                                                            <span>$45</span>
                                                            <span>$80</span>
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
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">Hot chocolate</Link></h4>
                                                        </div>
                                                        <div className="price">
                                                            <span>$22</span>
                                                            <span>$45</span>
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
                                                <div className="content">
                                                    <div className="top">
                                                        <div className="title">
                                                            <h4><Link to="/shop">CMilk Shake</Link></h4>
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
                                                        <div className="right">ও
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
                </div>
            </div>
        </>
    );
};

export default MenuV5;