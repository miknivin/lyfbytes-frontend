import LayoutV5 from "../../components/layouts/LayoutV6";
import LoginContent from "../../components/register/LoginContent";

const LoginPage = () => {
  return (
    <>
      <LayoutV5 title="Login Page" breadCrumb="login">
        <LoginContent />
      </LayoutV5>
    </>
  );
};

export default LoginPage;
