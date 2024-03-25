import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    singleProduct: {}
}

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProducts",
  async (id, { rejectWithValue, dispatch }) => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + `/products/${id}`
    );

    const data = await res.json();
    console.log(data);
    return data;
  }
);

const singleProductSlise = createSlice({
  name: "singleProduct",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProduct.pending, () => console.log("pending"))
      .addCase(getSingleProduct.rejected, () => console.log("rejected"));
  },
});

export const { setSingleProduct } = singleProductSlise.actions;
export default singleProductSlise.reducer;