import { store } from "../../store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setIsAuthenticated } from "../../store/features/userSlice";

interface LayoutProps {
    children?: React.ReactNode;
}

// Component to initialize auth state from localStorage
const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Check for stored token on app startup
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            dispatch(setToken(storedToken));
            dispatch(setIsAuthenticated(true));
        }
    }, [dispatch]);

    return <>{children}</>;
};

const ReduxWrapper = ({ children }: LayoutProps) => {
    return (
        <>
            <Provider store={store}>
                <AuthInitializer>
                    {children}
                </AuthInitializer>
            </Provider>
        </>
    );
};

export default ReduxWrapper;