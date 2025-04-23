import AcceptButton from "../AcceptButton";
import InputNumber from "../InputNumber";
import { ModalContainer, ModalContent, ModalFooter } from "./styles";

const InputModel: React.FC = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <InputNumber />
      </ModalContent>
      <ModalFooter>
        <AcceptButton />
      </ModalFooter>
    </ModalContainer>
  );
};
export default InputModel;
