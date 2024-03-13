import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
}


export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, {rejectWithValue, dispatch}) => {
        const response = await fetch(
            process.env.REACT_APP_BACKEND_BASE_URL + '/categories/all');
        const data = await response.json();
        console.log(data);
        return data;
    }
)

const categoriesSlise = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
       builder
         .addCase(getCategories.fulfilled, (state, action) => {
           console.log("fulfilled");
           state.categories = action.payload;
         })
         .addCase(getCategories.pending, () => console.log("pending"))
         .addCase(getCategories.rejected, () => console.log("rejected"));
  },
});

export const { setCategories } = categoriesSlise.actions;
export default categoriesSlise.reducer;