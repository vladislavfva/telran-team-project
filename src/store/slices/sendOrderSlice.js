import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const sendOrderData = createAsyncThunk(
  'order/sendOrderData',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_BASE_URL + '/order/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    loading: false,
    error: null,
    success: false,
    responseData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendOrderData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.responseData = action.payload;
      })
      .addCase(sendOrderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
        state.success = false;
      });
  },
});

export default orderSlice;
