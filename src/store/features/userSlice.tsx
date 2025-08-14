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

// Hydrate from localStorage if available
let persistedUser: User | null = null;
let persistedToken = "";
let persistedAuth = false;
try {
  const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const tokenStr = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  // Only hydrate if BOTH user and token exist and are valid
  if (userStr && tokenStr) {
    const parsedUser = JSON.parse(userStr);
    if (parsedUser && parsedUser.id && tokenStr.length > 0) {
      persistedUser = parsedUser;
      persistedToken = tokenStr;
      persistedAuth = true;
    } else {
      persistedUser = null;
      persistedToken = "";
      persistedAuth = false;
    }
  } else {
    persistedUser = null;
    persistedToken = "";
    persistedAuth = false;
  }
} catch {
  persistedUser = null;
  persistedToken = "";
  persistedAuth = false;
}
const initialState: UserState = {
  user: persistedUser,
  token: persistedToken,
  isAuthenticated: persistedAuth,
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
      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("token", state.token);
      }
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
      // Optionally persist auth state
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        // Also clear all localStorage if needed
        // localStorage.clear();
      }
    },
  },
});

export const { setUser, setToken, setIsAuthenticated, setLoading, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
