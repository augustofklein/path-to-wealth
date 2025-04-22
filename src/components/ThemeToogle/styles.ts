import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

export const ToogleContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

export const ToogleButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#374151" : "#E5E7EB"};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const IconSun = styled(FaSun)`
  color: #facc15;
`;

export const IconMoon = styled(FaMoon)`
  color: #1f2937;
`;
