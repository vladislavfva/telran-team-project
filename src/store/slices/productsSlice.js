import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  allProducts: [],
  currentProducts: [],
  filterDiscounted: false,
  randomize: false,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + '/products/all'
    );

    const data = await res.json();
    console.log(data);
    return data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilterDiscounted: (state, action) => {
      state.filterDiscounted = action.payload;
    },
    setRandomize: (state, action) => {
      state.randomize = action.payload;
    },
    filterPriceFrom: (state, action) => {
      if (action.payload > 0) {
        if (state.currentProducts.length > 0) {
          state.products = state.currentProducts.filter((product) => {
            if (product.discont_price) {
              return product.discont_price >= action.payload;
            } else {
              return product.price >= action.payload;
            }
          });
        } else {
          state.products = state.allProducts.filter((product) => {
            if (product.discont_price) {
              return product.discont_price >= action.payload;
            } else {
              return product.price >= action.payload;
            }
          });
        }
      }
      state.currentProducts = state.products;
    },
    filterPriceTo: (state, action) => {
      if (action.payload > 0) {
        if (state.currentProducts.length > 0) {
          state.products = state.currentProducts.filter(
            (product) => product.discont_price <= action.payload
          );
        } else {
          state.products = state.allProducts.filter(
            (product) => product.discont_price <= action.payload
          );
          state.currentProducts = state.products;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.allProducts = state.products;

        if (state.filterDiscounted) {
          state.products = action.payload.filter(
            (product) => product.discont_price > 0
          );
        } else {
          state.products = action.payload;
        }

        if (state.randomize) {
          state.products = state.products
            .slice()
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
        }
      })
      .addCase(getProducts.pending, () => console.log('pending'))
      .addCase(getProducts.rejected, () => console.log('rejected'));
  },
});

export const {
  setFilterDiscounted,
  setRandomize,
  filterPriceFrom,
  filterPriceTo,
} = productsSlice.actions;
export default productsSlice.reducer;
