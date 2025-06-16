import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  product: string; // Product ID
  name: string; // Product name
  image: string; // Product image
  price: number; // Price of the selected variant (actualPrice - offer)
  quantity: number; // Quantity of this variant
  variant: string; // Selected variant size (e.g., "200g")
  uploadedImage?: string | string[]; // Optional uploaded images
}

interface CartState {
  cartItems: CartItem[];
  shippingInfo: Record<string, any>;
  uploadedImages: Record<string, string[]>;
  selectedDesigns: Record<string, any>;
  quantityChange: { isIncreasing: boolean; timestamp: number };
}

const initialState: CartState = {
  cartItems: [],
  shippingInfo: {},
  uploadedImages: {},
  selectedDesigns: {},
  quantityChange: { isIncreasing: false, timestamp: 0 },
};

if (typeof window !== "undefined") {
  initialState.cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!).map((item: any) => ({
        ...item,
        variant: item.variant || "default", // Fallback for backward compatibility
      }))
    : [];
  initialState.shippingInfo = localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo")!)
    : {};
  initialState.uploadedImages = localStorage.getItem("uploadedImages")
    ? JSON.parse(localStorage.getItem("uploadedImages")!)
    : {};
  initialState.selectedDesigns = localStorage.getItem("selectedDesigns")
    ? JSON.parse(localStorage.getItem("selectedDesigns")!)
    : {};
}

const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem & { stock: number }>) => {
      const item = action.payload;
      const { stock } = item;
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product && i.variant === item.variant
      );

      const newQuantity = isItemExist
        ? isItemExist.quantity + item.quantity
        : item.quantity;

      if (newQuantity > stock) {
        throw new Error(
          `Cannot add ${item.name} (${item.variant}). Only ${stock} items in stock.`
        );
      }

      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.product === item.product && i.variant === item.variant
            ? { ...i, quantity: newQuantity }
            : i
        );
      } else {
        state.cartItems.push(item);
      }
      saveToLocalStorage("cartItems", state.cartItems);
    },
    updateCartItem: (
      state,
      action: PayloadAction<{
        product: string;
        variant: string;
        quantity: number;
        stock: number;
      }>
    ) => {
      const { product, variant, quantity, stock } = action.payload;
      if (quantity > stock) {
        throw new Error(
          `Cannot update quantity for ${product} (${variant}). Only ${stock} items in stock.`
        );
      }
      state.cartItems = state.cartItems.map((i) =>
        i.product === product && i.variant === variant ? { ...i, quantity } : i
      );
      saveToLocalStorage("cartItems", state.cartItems);
    },
    setCartItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product && i.variant === item.variant
      );

      if (isItemExist) {
        const uploadedImageCount = Array.isArray(isItemExist.uploadedImage)
          ? isItemExist.uploadedImage.length
          : isItemExist.uploadedImage
          ? 1
          : 0;
        if (isItemExist.quantity === uploadedImageCount) {
          state.cartItems = state.cartItems.map((i) =>
            i.product === item.product && i.variant === item.variant ? item : i
          );
        }
      } else {
        state.cartItems.push(item);
      }
      saveToLocalStorage("cartItems", state.cartItems);
    },
    removeCartItem: (
      state,
      action: PayloadAction<{ product: string; variant: string }>
    ) => {
      const { product, variant } = action.payload;
      state.cartItems = state.cartItems.filter(
        (i) => !(i.product === product && i.variant === variant)
      );
      delete state.uploadedImages[`${product}_${variant}`];
      saveToLocalStorage("cartItems", state.cartItems);
      saveToLocalStorage("uploadedImages", state.uploadedImages);
    },
    saveShippingInfo: (state, action: PayloadAction<Record<string, any>>) => {
      state.shippingInfo = action.payload;
      saveToLocalStorage("shippingInfo", state.shippingInfo);
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("uploadedImages");
      localStorage.removeItem("selectedDesigns");
      state.cartItems = [];
      state.uploadedImages = {};
      state.selectedDesigns = {};
    },
    setSelectedDesign: (
      state,
      action: PayloadAction<{ productId: string; variant: string; design: any }>
    ) => {
      const { productId, variant, design } = action.payload;
      const key = `${productId}_${variant}`;
      if (!state.selectedDesigns) {
        state.selectedDesigns = {};
      }
      state.selectedDesigns[key] = design;
      saveToLocalStorage("selectedDesigns", state.selectedDesigns);
    },
    resetSelectedDesign: (
      state,
      action: PayloadAction<{ productId: string; variant: string }>
    ) => {
      const { productId, variant } = action.payload;
      const key = `${productId}_${variant}`;
      delete state.selectedDesigns[key];
      saveToLocalStorage("selectedDesigns", state.selectedDesigns);
    },
    setUploadedImage: (
      state,
      action: PayloadAction<{
        productId: string;
        variant: string;
        uploadedImage: string | string[];
      }>
    ) => {
      const { productId, variant, uploadedImage } = action.payload;
      const key = `${productId}_${variant}`;
      if (!state.uploadedImages[key]) {
        state.uploadedImages[key] = [];
      }
      if (Array.isArray(uploadedImage)) {
        state.uploadedImages[key] = [
          ...state.uploadedImages[key],
          ...uploadedImage,
        ];
      } else {
        state.uploadedImages[key].push(uploadedImage);
      }
      saveToLocalStorage("uploadedImages", state.uploadedImages);
    },
    resetUploadedImage: (
      state,
      action: PayloadAction<{ productId: string; variant: string }>
    ) => {
      const { productId, variant } = action.payload;
      const key = `${productId}_${variant}`;
      const isInCart = state.cartItems.some(
        (item) => item.product === productId && item.variant === variant
      );
      if (isInCart) {
        state.cartItems = state.cartItems.filter(
          (i) => !(i.product === productId && i.variant === variant)
        );
        saveToLocalStorage("cartItems", state.cartItems);
      }
      delete state.uploadedImages[key];
      saveToLocalStorage("uploadedImages", state.uploadedImages);
    },
    removeUploadedImage: (
      state,
      action: PayloadAction<{
        productId: string;
        variant: string;
        imageIndex: number;
      }>
    ) => {
      const { productId, variant, imageIndex } = action.payload;
      const key = `${productId}_${variant}`;
      if (state.uploadedImages[key]) {
        state.uploadedImages[key] = state.uploadedImages[key].filter(
          (_, index) => index !== imageIndex
        );
        if (state.uploadedImages[key].length === 0) {
          delete state.uploadedImages[key];
        }
        saveToLocalStorage("uploadedImages", state.uploadedImages);
      }
    },
    mergeCartData: (state) => {
      state.cartItems = state.cartItems.map((item) => ({
        ...item,
        selectedDesign:
          state.selectedDesigns[`${item.product}_${item.variant}`] || null,
        uploadedImages:
          state.uploadedImages[`${item.product}_${item.variant}`] || [],
      }));
      saveToLocalStorage("cartItems", state.cartItems);
    },
    setQuantityChange: (
      state,
      action: PayloadAction<{ isIncreasing: boolean }>
    ) => {
      const { isIncreasing } = action.payload;
      state.quantityChange = {
        isIncreasing,
        timestamp: Date.now(),
      };
      saveToLocalStorage("quantityChange", state.quantityChange);
    },
    removeCartItemUploadedImage: (
      state,
      action: PayloadAction<{
        productId: string;
        variant: string;
        imageIndex: number;
      }>
    ) => {
      const { productId, variant, imageIndex } = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.product === productId && item.variant === variant
      );
      if (cartItem && Array.isArray(cartItem.uploadedImage)) {
        if (cartItem.uploadedImage.length > 1) {
          cartItem.uploadedImage = cartItem.uploadedImage.filter(
            (_, index) => index !== imageIndex
          );
        }
        saveToLocalStorage("cartItems", state.cartItems);
      }
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  setCartItem,
  removeCartItem,
  saveShippingInfo,
  clearCart,
  updateCartItem,
  setSelectedDesign,
  resetSelectedDesign,
  setUploadedImage,
  resetUploadedImage,
  removeUploadedImage,
  mergeCartData,
  setQuantityChange,
  removeCartItemUploadedImage,
} = cartSlice.actions;
