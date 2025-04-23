import { Input, InputContainer, InputLabel } from "./styles";

interface InputNumberProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const InputNumber: React.FC<InputNumberProps> = () => {
  return (
    <InputContainer>
      <InputLabel htmlFor="amount">Valor</InputLabel>
      <Input id="amount" type="number" placeholder="0,00" />;
    </InputContainer>
  );
};
export default InputNumber;
