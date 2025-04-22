import { useTheme } from "next-themes";
import { IconMoon, IconSun, ToogleButton, ToogleContainer } from "./styles";

const ThemeToogle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ToogleContainer>
      <ToogleButton
        theme={theme}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </ToogleButton>
    </ToogleContainer>
  );
};
export default ThemeToogle;
