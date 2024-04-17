import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  allCategories: [],
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_BASE_URL + '/categories/all'
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

const categoriesSlise = createSlice({
  name: 'categories',
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    /* .addCase(getCategories.pending, () => console.log('pending'))
      .addCase(getCategories.rejected, () => console.log('rejected')); */
  },
});

export const { setCategories } = categoriesSlise.actions;
export default categoriesSlise.reducer;
