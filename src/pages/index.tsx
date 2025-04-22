import MainModal from "@/components/MainModal";
import ScreenBackground from "@/components/ScreenBackground";
import { ReactNode } from "react";

interface HomeProps {
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <ScreenBackground>
      <MainModal />
    </ScreenBackground>
  );
};
export default Home;
