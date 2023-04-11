import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-qk5m.onrender.com/api/';
// axios.defaults.baseURL = 'http://localhost:3001';

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/recipes/category-list');
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export const fetchRecipesByCategory = async (
  categoryName,
  limit = 8,
  page = 1
) => {
  try {
    const response = await axios.get(
      `recipes/categories/${categoryName}?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (e) {
    return e.message;
  }
};
