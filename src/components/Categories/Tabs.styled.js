import styled from 'styled-components';

export const TabInput = styled.input`
  display: none;
  /* :checked + label::after {
    display: block;
    position: absolute;
    top: 49px;
    transform: rotate(180deg);
    content: '';
    width: 100%;
    height: 2px;
    background-color: rgba(139, 170, 54, 1);
  } */
  :checked + label {
    border-bottom: 2px solid rgba(139, 170, 54, 1);
  }
`;

export const TabLabel = styled.label`
  cursor: pointer;
  display: block;
  height: 46px;
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: rgba(139, 170, 54, 1);
`;

export const TabList = styled.ul`
  display: flex;

  justify-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 10px 10px 0px 10px;
`;

export const TabWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-left: 19px;

  border-bottom: 1px solid #e0e0e0;
  overflow-x: scroll;
  overflow-y: visible;
  border-bottom: 1px solid #e0e0e0;
`;

export const CategoriesWrap = styled.div`
  margin-top: 50px;
  padding-left: 19px;
`;

export const CategoriesTitle = styled.h1`
  margin-bottom: 50px;
  margin-top: 0px;
  padding: 0px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
`;
