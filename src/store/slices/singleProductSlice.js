import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  singleProduct: [],
};

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProducts",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_BASE_URL + `/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const singleProductSlise = createSlice({
  name: 'singleProduct',
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        console.log('fulfilled');
        state.singleProduct = action.payload;
        if (action.payload[0].id === 2) {
          action.payload[0].discont_price = (
            action.payload[0].price / 2
          ).toFixed(2);
        }
      })
      .addCase(getSingleProduct.pending, () => console.log('pending'))
      .addCase(getSingleProduct.rejected, () => console.log('rejected'));
  },
});

export const { setSingleProduct } = singleProductSlise.actions;
export default singleProductSlise.reducer;
