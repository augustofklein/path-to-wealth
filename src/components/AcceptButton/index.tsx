import { Button } from "./styles";
import { FaCheck } from "react-icons/fa";

const AcceptButton: React.FC = () => {
  return (
    <Button onClick={() => alert("Button clicked!")}>
      <FaCheck style={{ marginRight: "8px" }} />
      CALCULATE
    </Button>
  );
};
export default AcceptButton;
