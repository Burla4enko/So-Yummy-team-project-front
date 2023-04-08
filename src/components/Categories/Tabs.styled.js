import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 16px;
`;

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
    color: rgba(139, 170, 54, 1);
  }
`;

export const TabLabel = styled.label`
  cursor: pointer;
  display: block;
  height: 46px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* letter-spacing: 0.06rem; */
  color: rgba(189, 189, 189, 1);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TabList = styled.ul`
  display: flex;

  justify-items: center;

  gap: 28px;
  padding: 10px 10px 0px 10px;
  @media screen and (min-width: 768px) {
    gap: 55px;
  }
`;

export const TabWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-left: 19px;

  border-bottom: 1px solid #e0e0e0;
  overflow-x: auto;

  border-bottom: 1px solid #e0e0e0;

  /* cursor: grab; */

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-top: 100px;
  }
`;
export const Tab = styled.li`
  overflow-x: auto;
`;

export const CategoriesTitle = styled.h1`
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 0px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    margin-bottom: 100px;
    margin-top: 100px;
  }
`;
