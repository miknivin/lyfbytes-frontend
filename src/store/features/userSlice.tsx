import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface UserState {
  user: User | null;
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  token: "",
  isAuthenticated: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = {
        id: action.payload.id,
        name: action.payload.name || "",
        email: action.payload.email || "",
        phone: action.payload.phone || "",
      };
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
      // Clear logout flags when user is successfully authenticated
      if (action.payload === true && typeof window !== "undefined") {
        localStorage.removeItem("hasLoggedOut");
        sessionStorage.removeItem("userLoggedOut");
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
      // Remove token from localStorage and set logout flag when clearing user
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.setItem("hasLoggedOut", "true");
        // Also set a session flag to prevent re-authentication during this session
        sessionStorage.setItem("userLoggedOut", "true");
      }
    },
  },
});

export const { setUser, setToken, setIsAuthenticated, setLoading, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
