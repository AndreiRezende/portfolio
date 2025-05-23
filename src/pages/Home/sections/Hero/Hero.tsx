import { Container, styled, Typography, Grid } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailIcon from '@mui/icons-material/Mail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from '../../../../components/AnimatedBackground/AnimatedBackground';
import CV from "../../../../assets/pdfs/CV.pdf"

const Hero: React.FC = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: 'transparent',
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px"
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            paddingTop: "100px",
            alignItems: "center",
            height: "100vh"       
        }
    }));

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'andrei.rezende@hotmail.com';
        const subject = 'Internship opportunity at...';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

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
        color: theme.palette.primary.contrastText,
        fontWeight: 700,
        marginBottom: '16px',
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem'
        }
    }));

    const Subtitle = styled(Typography)(({theme}) => ({
        color: theme.palette.primary.contrastText,
        fontWeight: 400,
        marginBottom: '32px',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        }
    }));

    return (
        <>
            
            <StyledHero>
                <Container maxWidth="lg">
                    <AnimatedBackground />
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
                                        <StyledButton onClick={() => handleEmail()}>
                                            <MailIcon/>
                                            <Typography>Contact Me</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} display="flex" justifyContent="center">
                                        <StyledButton onClick={() => handleDownload()}>
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