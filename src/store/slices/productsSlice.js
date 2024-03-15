import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  allProducts: [],
  productsBeforeSort: [],
  priceFrom: 0,
  priceTo: 0,
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
    displayDiscounted: (state, action) => {
      if (action.payload) {
        state.products = state.products.filter(
          (product) => product.discont_price > 0
        );
      } else {
        state.products = state.allProducts;
      }
    },
    setRandomize: (state, action) => {
      state.randomize = action.payload;
    },
    filterPrice: (state, action) => {
      const [priceFrom, priceTo] = action.payload;

      // Устанавливаем значения цен, если они не равны undefined
      state.priceFrom = priceFrom !== undefined ? priceFrom : state.priceFrom;
      state.priceTo = priceTo !== undefined ? priceTo : state.priceTo;

      // Фильтрация продуктов по цене
      state.products = state.allProducts.filter((product) => {
        const discontPrice = product.discont_price || product.price; // Если у продукта есть discont_price, используем его, иначе используем price

        if (state.priceFrom && state.priceTo) {
          return (
            discontPrice >= state.priceFrom && discontPrice <= state.priceTo
          );
        } else if (state.priceFrom) {
          return discontPrice >= state.priceFrom;
        } else if (state.priceTo) {
          return discontPrice <= state.priceTo;
        }

        return true; // Возвращаем true, чтобы не производить фильтрацию по цене, если цены не заданы
      });
      state.productsBeforeSort = state.products;
    },
    sortPrice: (state, action) => {
      if (action.payload === 'default') {
        state.products = state.productsBeforeSort;
      } else if (action.payload === 'decrease') {
        state.products = state.products
          .slice()
          .sort(
            (a, b) =>
              (b.discont_price || b.price) - (a.discont_price || a.price)
          );
      } else if (action.payload === 'increase') {
        state.products = state.products
          .slice()
          .sort(
            (a, b) =>
              (a.discont_price || a.price) - (b.discont_price || b.price)
          );
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
  displayDiscounted,
  setRandomize,
  filterPrice,
  sortPrice,
} = productsSlice.actions;
export default productsSlice.reducer;
