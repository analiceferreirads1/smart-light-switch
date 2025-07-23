import styled, { keyframes, css } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`

  padding: 20px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#111" : "#fff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#f5f5f5" : "#222")};
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media (max-width: 600px) {
    padding: 10px;
   
  }
`;

export const LightIcon = styled.div`
  font-size: 500px;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  svg {
    color: ${({ isOn }) => (isOn ? "#FFD700" : "#999")};
    filter: ${({ isOn }) =>
    isOn ? "drop-shadow(0 0 20px #FFD700)" : "brightness(0.8)"};
    transition: all 0.3s ease;

    ${({ isAnimating }) =>
    isAnimating &&
    css`
        animation: ${pulse} 0.3s ease;
      `}

    @media (max-width: 600px) {
      width: 300px;
      height: 300px;
     
    }
  }
`;

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-top: -100px;
  }
`;

export const OnButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    padding: 8px 14px;
    font-size: 14px;
    
  }
`;

export const OffButton = styled(OnButton)`
  background-color: #e74c3c;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;

export const ThemeToggleButton = styled.button`
  margin-top: 30px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #666;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;
