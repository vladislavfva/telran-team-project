import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  singleProduct: [],
  discountProduct: [],
};

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProducts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_BASE_URL + `/products/${id}`
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    setDiscountProduct: (state, action) => {
      state.discountProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        console.log('fulfilled');
        state.singleProduct = action.payload;

        // Logic to update discountProduct
        if (action.payload[0].id === 2) {
          state.discountProduct = action.payload.map((product) => ({
            ...product,
            discont_price: (product.price / 2).toFixed(2),
          }));
        }
      })
      .addCase(getSingleProduct.pending, () => console.log('pending'))
      .addCase(getSingleProduct.rejected, () => console.log('rejected'));
  },
});

export const { setDiscountProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
