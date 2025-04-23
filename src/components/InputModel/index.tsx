import AcceptButton from "../AcceptButton";
import { ModalContainer, ModalFooter } from "./styles";

const InputModel: React.FC = () => {
  return (
    <ModalContainer>
      <ModalFooter>
        <AcceptButton />
      </ModalFooter>
    </ModalContainer>
  );
};
export default InputModel;
