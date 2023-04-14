import useWindowDimensions from 'hooks/useWindowDimensions';
import { AddRecipeForm } from '../../components/AddRecipePage/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../../components/AddRecipePage/PopularRecipe/PopularRecipe';
import { FollowUs } from '../../components/AddRecipePage/FollowUs/FollowUs';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { AddRecipePageStyled } from './AddRecipePage.styled';
import { ContainerComponent } from 'components/Container/Container.styled';

export default function AddRecipePage() {
  const { width } = useWindowDimensions();
  return (
    <AddRecipePageStyled>
      <ContainerComponent>
        <MainTitle title={'Add recipe'} />
        <AddRecipeForm />
        {width > 1439 && <FollowUs />}
        <PopularRecipe />
      </ContainerComponent>
    </AddRecipePageStyled>
  );
}
