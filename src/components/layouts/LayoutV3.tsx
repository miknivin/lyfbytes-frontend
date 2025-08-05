import FooterV1 from '../footer/FooterV1';
import HeaderV7 from '../header/HeaderV7';

interface LayoutProps {
    children?: React.ReactNode;
    isDark?: boolean
}

const LayoutV3 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderV7 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV3;