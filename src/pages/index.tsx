import InputModel from "@/components/InputModel";
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
      <InputModel />
    </ScreenBackground>
  );
};
export default Home;
