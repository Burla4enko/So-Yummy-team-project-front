import styled from 'styled-components';

export const SubscribeFormWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 339px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const TextBeforeSubscribe = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #fafafa;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #fafafa;
`;

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 43.5px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-bottom: 37.5px;
  }

  @media screen and (min-width: 1440px) {
    width: 339px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 204px;
@media screen and (min-width: 768px) {
    width: 259px;
  @media screen and (min-width: 1440px) {
    width: 339px;
   
  }
`;

export const Input = styled.input`
  height: 38px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  background: #22252a;
  color: #fafafa;
  outline: none;
  &:focus,
  &:hover {
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  width: 204px;
  padding: 11px 71px;
  background: #8baa36;
  border-radius: 6px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  color: #fafafa;
  cursor: pointer;
  &:focus,
  &:hover {
    color: #22252a;
  }
   @media screen and (min-width: 768px) {
    width: 171px;
   @media screen and (min-width: 1440px) {
    width: 339px;
`;
