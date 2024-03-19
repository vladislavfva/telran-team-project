import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  allProducts: [],
  productsBeforeSort: [],
  currentProducts: [],
  priceFrom: 0,
  priceTo: 0,
  discounted: false,
  filterDiscounted: false,
  randomize: false,
  loaded: false,
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

const filterProducts = (products, priceFrom, priceTo) => {
  return products.filter((product) => {
    const discontPrice = product.discont_price || product.price;
    if (priceFrom && priceTo) {
      return discontPrice >= priceFrom && discontPrice <= priceTo;
    } else if (priceFrom) {
      return discontPrice >= priceFrom;
    } else if (priceTo) {
      return discontPrice <= priceTo;
    }
    return true;
  });
};

const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'default':
      return products;
    case 'decrease':
      return products
        .slice()
        .sort(
          (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
        );
    case 'increase':
      return products
        .slice()
        .sort(
          (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
        );
    default:
      return products;
  }
};

const filterDiscountedProducts = (products) => {
  return products.filter((product) => product.discont_price > 0);
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilterDiscounted: (state, action) => {
      state.filterDiscounted = action.payload;
    },
    displayDiscounted: (state, action) => {
      action.payload ? (state.discounted = true) : (state.discounted = false);
      if (state.discounted) {
        state.currentProducts = state.products;
        state.products = filterDiscountedProducts(state.products);
      } else {
        state.products = state.currentProducts; //curentProducts
      }
      state.products = sortProducts(state.products, state.sortBy);
      /* state.products = filterProducts(
        state.currentProducts,
        state.priceFrom,
        state.priceTo
      ); */
    },
    setRandomize: (state, action) => {
      state.randomize = action.payload;
    },
    filterPrice: (state, action) => {
      const [priceFrom, priceTo] = action.payload;
      state.priceFrom = priceFrom !== undefined ? priceFrom : state.priceFrom;
      state.priceTo = priceTo !== undefined ? priceTo : state.priceTo;
      state.products = filterProducts(
        state.allProducts,
        state.priceFrom,
        state.priceTo
      );
      state.products = sortProducts(state.products, state.sortBy);
      if (state.discounted) {
        state.products = filterDiscountedProducts(state.products);
      }
    },
    sortPrice: (state, action) => {
      state.sortBy = action.payload;
      state.products = sortProducts(state.products, state.sortBy);
    },
    productById: (state, action) => {
      if (state.allProducts.length > 0) {
        console.log('hello');
        state.products = state.allProducts.filter(
      (product) => product.categoryId === action.payload
    )

      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.allProducts = state.products;
        state.loaded = true;
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
        // if (state.categoryId) {
        //   state.products = state.products.filter(
        //     (product) => product.categoryId
        //   )
        // };
       
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
  productById,
} = productsSlice.actions;
export default productsSlice.reducer;
