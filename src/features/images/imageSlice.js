import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: JSON.parse(localStorage.getItem("images")) || [],
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload);   // ✅ FIX
      localStorage.setItem("images", JSON.stringify(state.images));
    },
    deleteImage: (state, action) => {
      state.images = state.images.filter((img) => img.id !== action.payload);
      localStorage.setItem("images", JSON.stringify(state.images));
    },
    clearImages: (state) => {
      state.images = [];
      localStorage.removeItem("images");
    },
  },
});

export const { addImage, deleteImage, clearImages } = imageSlice.actions;
export default imageSlice.reducer;
