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
        // Only hydrate if BOTH user and token exist and are valid
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");
        if (storedToken && storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser && parsedUser.id && storedToken.length > 0) {
                    dispatch(setToken(storedToken));
                    dispatch(setIsAuthenticated(true));
                }
            } catch {
                // Invalid user data, do not hydrate
            }
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