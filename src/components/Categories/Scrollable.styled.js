import styled from 'styled-components';

export const TabList = styled.ul`
  display: flex;

  justify-items: center;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  gap: 28px;
  padding: 10px 10px 0px 10px;
  @media screen and (min-width: 768px) {
    gap: 55px;
  }
`;
