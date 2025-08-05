import FooterV1 from "../footer/FooterV1";
import HeaderV4 from "../header/HeaderV4";

interface LayoutProps {
    children?: React.ReactNode
}

const LayoutV4 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderV4 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV4;