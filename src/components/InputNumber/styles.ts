import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: gray;
  border-radius: 10px;
  border: 2px solid #ccc;
  padding: 0 20px;
  font-size: 16px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
