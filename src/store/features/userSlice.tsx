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
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setToken, setIsAuthenticated, setLoading, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
