import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const sendSaleData = createAsyncThunk(
  'sale/sendSaleData',
  async (saleData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_BASE_URL + '/sale/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(saleData),
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

const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    loading: false,
    error: null,
    success: false,
    responseData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendSaleData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendSaleData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.responseData = action.payload;
      })
      .addCase(sendSaleData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
        state.success = false;
      });
  },
});

export default saleSlice;
