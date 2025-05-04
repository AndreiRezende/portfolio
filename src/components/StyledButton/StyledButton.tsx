import { styled } from "@mui/material";
import { ReactNode } from "react";
import { keyframes } from "@emotion/react";

interface StyledButtonProps {
  children: ReactNode
  onClick: () => void
}

const halftone = keyframes`
  0% {
    background-size: 1.25em 1.25em;
  }
  50% {
    background-size: 1.5em 1.5em;
  }
  100% {
    background-size: 2.375em 2.375em, 0.1em 0.1em;
  }
`;


const CustomButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  borderBottomWidth: "4px",
  borderRadius: "3px",
  padding: "1em 2em",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "7px",
  font: "inherit",
  letterSpacing: "inherit",
  textTransform: "inherit",
  margin: "0.5em",
  cursor: "pointer",
  transition: "color 0.5s, background-color 0.5s, border-color 0.5s",
  position: "relative",
  overflow: "hidden",

  '&::before': {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `
      radial-gradient(circle, ${theme.palette.secondary.main} 0.2em, transparent 0.25em),
      radial-gradient(circle, ${theme.palette.secondary.main} 0.2em, transparent 0.25em)
    `,
    backgroundPosition: "0 0, 6.25em 6.25em",
    backgroundSize: "1.25em 1.25em",
    zIndex: 0,
    opacity: 0,
    transition: "opacity 0.5s, background-size 1s",
  },

  '&:hover::before': {
    animation: `${halftone} 1.5s forwards`,
    opacity: 1,
  },

  '&:hover': {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.primary.dark,
    transitionDelay: '0.2s'
  },

  '&:active': {
    transform: "translateY(2px)",
    borderBottomWidth: "2px"
  },

  '& > *': {
    position: "relative",
    zIndex: 1,
  }
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <CustomButton onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default StyledButton;
