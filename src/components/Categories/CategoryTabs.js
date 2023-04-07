import axios from 'axios';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  TabInput,
  TabList,
  TabWrap,
  CategoriesWrap,
  CategoriesTitle,
  TabLabel,
  Container,
} from './Tabs.styled';

axios.defaults.baseURL = 'https://soyummy-qk5m.onrender.com/api';
// const instance = axios.create({
//   baseURL: 'https://soyummy-qk5m.onrender.com/api',
//   // baseURL: process.env.REACT_APP_API_URL,
// });

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/recipes/category-list');
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export const CategoryTabs = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const categories = await fetchCategories();

        if (categories.length > 0) {
          setCategories(categories.map(categorie => categorie));
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getCategories();
  }, []);

  return (
    <CategoriesWrap>
      <CategoriesTitle>Categories</CategoriesTitle>
      <TabWrap>
        <TabList>
          {categories?.map(categorie => (
            <li key={nanoid()}>
              <TabInput type="radio" name="categorie" id={categorie} />
              <TabLabel htmlFor={categorie}>{categorie}</TabLabel>
            </li>
          ))}
        </TabList>
      </TabWrap>
    </CategoriesWrap>
  );
};
