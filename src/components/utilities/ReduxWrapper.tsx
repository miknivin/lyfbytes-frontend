import { store } from "../../store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
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
                    // Verify with backend if session/cookie is still valid
                    axios.get("/api/auth/me", { withCredentials: true })
                        .then(res => {
                            if (res.data && res.data.user && res.data.user.id) {
                                dispatch(setToken(storedToken));
                                dispatch(setIsAuthenticated(true));
                            } else {
                                // Not authenticated, do not hydrate
                            }
                        })
                        .catch(() => {
                            // Not authenticated, do not hydrate
                        });
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