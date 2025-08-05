import FoodMenuData from "../../assets/jsonData/menu/FoodMenuData.json";
import SingleIsotopeContent from "./SingleIsotopeContent";
import { useEffect, useRef, useState } from "react";

interface MenuIsotopeProps {
    hasTitle?: boolean;
    sectionClass?: string;
}

const MenuIsotope: React.FC<MenuIsotopeProps> = ({ hasTitle, sectionClass }) => {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const isoRef = useRef<any>(null);
    const [activeFilter, setActiveFilter] = useState<string>('*');
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const initializeIsotope = async () => {
            const Isotope = (await import('isotope-layout')).default;
            const imagesLoaded = (await import('imagesloaded')).default;

            isoRef.current = new Isotope(gridRef.current!, {
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
            });

            const imgLoad = imagesLoaded(gridRef.current!);

            // Store the listener function
            const listener = () => {
                isoRef.current.arrange();
            };

            imgLoad.on('always', listener);

            return () => {
                if (isoRef.current) {
                    isoRef.current.destroy();
                }
                imgLoad.off('always', listener);
            };
        };

        if (isClient) {
            initializeIsotope();
        }
    }, [isClient]);

    const handleFilter = (filterValue: string) => {
        setActiveFilter(filterValue);
        if (isoRef.current) {
            isoRef.current.arrange({ filter: filterValue });
        }
    };

    return (
        <>
            <div className={`food-menu-area inc-isotop default-padding ${sectionClass}`}>
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Food Menu</h4>
                                    <h2 className="title">Discover Our Menu</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="food-menu-area">
                        <div className="row">
                            <div className="col-md-12 food-menu-content text-center">
                                <div className="mix-item-menu">
                                    <button className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilter('*')}>All</button>
                                    <button className={activeFilter === '.pancakes' ? 'active' : ''} onClick={() => handleFilter('.pancakes')}>Pancakes</button>
                                    <button className={activeFilter === '.sandwiches' ? 'active' : ''} onClick={() => handleFilter('.sandwiches')}>Sandwiches</button>
                                    <button className={activeFilter === '.brunch' ? 'active' : ''} onClick={() => handleFilter('.brunch')}>Brunch</button>
                                    <button className={activeFilter === '.vegetarian' ? 'active' : ''} onClick={() => handleFilter('.vegetarian')}>Vegetarian</button>
                                    <button className={activeFilter === '.meat' ? 'active' : ''} onClick={() => handleFilter('.meat')}>Meat</button>
                                </div>

                                <div className="masonary">
                                    <div id="portfolio-grid" className="food-menu-lists colums-3" ref={gridRef}>
                                        {FoodMenuData.map(food => (
                                            <div className={`food-menu-style-one pf-item grid-item ${food.category.join(' ')}`} key={food.id}>
                                                <SingleIsotopeContent food={food} />
                                            </div>
                                        ))}
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

export default MenuIsotope;