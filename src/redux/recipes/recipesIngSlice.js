import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './operations';
import { categories } from './categories/categories';

const initialState = {
  category: categories,
  ingredients: [],
  isLoading: false,
  error: null,
};

const recipesIngSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  extraReducers: {
    [fetchIngredients.pending](state) {
      state.isLoading = true;
    },
    [fetchIngredients.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.ingredients = action.payload;
    },
    [fetchIngredients.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const recipesReducer = recipesIngSlice.reducer;
