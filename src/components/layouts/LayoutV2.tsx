import FooterV1 from "../footer/FooterV1";
import HeaderV6 from "../header/HeaderV6";

interface LayoutProps {
    children?: React.ReactNode
}

const LayoutV2 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderV6 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV2;