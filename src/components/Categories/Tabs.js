import axios from 'axios';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Scrollable } from './Scrollable';
import {
  TabInput,
  TabList,
  TabWrap,
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

export const Tabs = () => {
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
    <Container>
      <CategoriesTitle>Categories</CategoriesTitle>

      <TabWrap>
        <Scrollable>
          {/* <TabList> */}
          {categories?.map(categorie => (
            <li key={nanoid()}>
              <TabInput type="radio" name="categorie" id={categorie} />
              <TabLabel htmlFor={categorie}>{categorie}</TabLabel>
            </li>
          ))}
          {/* </TabList> */}
        </Scrollable>
      </TabWrap>
    </Container>
  );
};
