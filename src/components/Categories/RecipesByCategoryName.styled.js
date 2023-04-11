import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 28px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 50px;
    gap: 32px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  } ;
`;
