import MainModal from "@/components/MainModal";
import ScreenBackground from "@/components/ScreenBackground";
import ThemeToogle from "@/components/ThemeToogle";
import { ReactNode } from "react";

interface HomeProps {
  children?: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <ScreenBackground>
      <ThemeToogle />
      <MainModal />
    </ScreenBackground>
  );
};
export default Home;
