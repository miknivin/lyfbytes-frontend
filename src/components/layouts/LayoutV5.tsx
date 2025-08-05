import BreadCrumb from "../breadCrumb/BreadCrumb";
import FooterV1 from "../footer/FooterV1";
import HeaderV2 from "../header/HeaderV2";
// import HeaderV5 from "../header/HeaderV5";

interface LayoutProps {
  children?: React.ReactNode;
  breadCrumb?: string;
  title?: string;
}

const LayoutV5 = ({ children, breadCrumb, title }: LayoutProps) => {
  return (
    <>
      <HeaderV2 />
      {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
      {children}
      <FooterV1 />
    </>
  );
};

export default LayoutV5;
