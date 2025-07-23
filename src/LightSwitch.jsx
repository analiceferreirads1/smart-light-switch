// LightSwitch.jsx
import { useEffect, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi2";
import {
  Container,
  LightIcon,
  Message,
  OnButton,
  OffButton,
  ButtonGroup,
  ThemeToggleButton,
} from "./styles";

function LightSwitch() {
  const [isOn, setIsOn] = useState(() => {
    const saved = localStorage.getItem("light-status");
    return saved === "true";
  });

  const [isAnimating, setIsAnimating] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme-mode");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("light-status", isOn);
  }, [isOn]);

  useEffect(() => {
    localStorage.setItem("theme-mode", isDarkMode);
  }, [isDarkMode]);

  function handleTurnOn() {
    if (!isOn) setIsOn(true);
    animateLight();
  }

  function handleTurnOff() {
    if (isOn) setIsOn(false);
    animateLight();
  }

  function animateLight() {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  }

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <Container isDarkMode={isDarkMode}>
      <LightIcon isOn={isOn} isAnimating={isAnimating}>
        <HiOutlineLightBulb />
      </LightIcon>

      <Message>{isOn ? "A luz está ACESA" : "A luz está APAGADA"}</Message>

      <ButtonGroup>
        <OnButton onClick={handleTurnOn} disabled={isOn}>LIGAR</OnButton>
        <OffButton onClick={handleTurnOff} disabled={!isOn}>DESLIGAR</OffButton>
      </ButtonGroup>

      <ThemeToggleButton onClick={toggleTheme}>
        {isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
      </ThemeToggleButton>
    </Container>
  );
}

export default LightSwitch;