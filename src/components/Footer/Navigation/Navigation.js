import { Nav, Link } from './Navigation.styled';

const Navigation = () => {

  return (
      <Nav>
        <Link to="/ingridients">Ingredients</Link>
        <Link to="/add recipes">Add recipes</Link>
        <Link to="/my recipes">My recipes</Link>
        <Link to="/favorite">Favorite</Link>
        <Link to="/shopping list">Shopping list</Link>
      </Nav>
  );
};

export default Navigation;