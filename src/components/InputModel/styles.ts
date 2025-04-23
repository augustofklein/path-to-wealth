import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 800px;
  height: 400px;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 12px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
