import { Container, styled, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Avatar from "../../../../assets/images/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailIcon from '@mui/icons-material/Mail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from '../../../../components/AnimatedBackground/AnimatedBackground';

const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: 'transparent',
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: 'relative'
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
        maxWidth: "250px",
        borderRadius: "50%",
        margin: "0 auto",
        display: "block"
    }));

    const ContentWrapper = styled("div")({
        position: 'relative',
        zIndex: 1,
        width: '100%',
        padding: '20px'
    });

    const Title = styled(Typography)(({theme}) => ({
        color: theme.palette.secondary.main,
        fontWeight: 700,
        marginBottom: '16px',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem'
        }
    }));

    const Subtitle = styled(Typography)(({theme}) => ({
        color: theme.palette.secondary.main,
        fontWeight: 400,
        marginBottom: '32px',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    }));

    return (
        <>
            <AnimatedBackground />
            
            <StyledHero>
                <Container maxWidth="lg">
                    <ContentWrapper>
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" alignItems="center">
                                <StyledImg src={Avatar} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 8 }} display="flex" flexDirection="column" justifyContent="center">
                                <Title variant="h1" textAlign="center">
                                    Andrei Rezende Ono
                                </Title>
                                <Subtitle variant="h2" textAlign="center">
                                    Computer Engineering Student
                                </Subtitle>
                                <Grid container spacing={3} justifyContent="center">
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} display="flex" justifyContent="center">
                                        <StyledButton>
                                            <MailIcon/>
                                            <Typography>Contact Me</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} display="flex" justifyContent="center">
                                        <StyledButton>
                                            <FileDownloadIcon />
                                            <Typography>Download CV</Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ContentWrapper>
                </Container>
            </StyledHero>
        </>
    );
};
  
export default Hero;