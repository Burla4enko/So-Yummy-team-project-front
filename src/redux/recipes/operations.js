import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '/ingredients/list';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/ingredients');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
