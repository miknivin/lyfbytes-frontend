import { store } from "../../store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setIsAuthenticated, setUser, clearUser } from "../../store/features/userSlice";
const API_URL = import.meta.env.VITE_API_URL || "";
interface LayoutProps {
    children?: React.ReactNode;
}

// Component to initialize auth state from localStorage
const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            // Validate token with backend
            fetch(`${API_URL}/api/auth/getme`, {
                headers: { Authorization: `Bearer ${storedToken}` }
            })
            .then(res => res.json())
            .then(data => {
                if (data.success && data.user) {
                    dispatch(setToken(storedToken));
                    dispatch(setUser(data.user));
                    dispatch(setIsAuthenticated(true));
                } else {
                    localStorage.removeItem("token");
                    dispatch(clearUser());
                }
            })
            .catch(() => {
                localStorage.removeItem("token");
                dispatch(clearUser());
            });
        } else {
            dispatch(clearUser());
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