import RegisterContent from "../../components/register/RegisterContent";
import LayoutV5 from "../../components/layouts/LayoutV6";

const RegisterPage = () => {
  return (
    <>
      <LayoutV5 title="Register Page" breadCrumb="register">
        <RegisterContent />
      </LayoutV5>
    </>
  );
};

export default RegisterPage;
