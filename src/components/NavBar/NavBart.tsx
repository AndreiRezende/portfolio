import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar) (({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        color: theme.palette.primary.dark,
        background: theme.palette.secondary.main
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Experiences</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar