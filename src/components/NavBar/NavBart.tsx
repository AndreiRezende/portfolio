import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontWeight: "600",
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    transform: 'scale(1.05)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    color: theme.palette.primary.dark
  }
}));

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main
  }));


const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <StyledMenuItem onClick={() => scrollToSection("about-section")}>About</StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection("experiences")}>Experiences</StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection("projects")}>Projects</StyledMenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;