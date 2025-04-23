import { Button } from "./styles";
import { FaCheck } from "react-icons/fa";

const AcceptButton: React.FC = () => {
  return (
    <Button>
      <FaCheck style={{ marginRight: "8px" }} />
      CALCULATE
    </Button>
  );
};
export default AcceptButton;
