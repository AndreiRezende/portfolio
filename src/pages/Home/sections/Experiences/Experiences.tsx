import { Box, Typography, Container } from "@mui/material";

const Experiences = () => {
  return (
    <Box 
      id="experiences"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'secondary.dark',
        color: 'primary.contrastText'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" mb={4}>
          Experiences
        </Typography>
      </Container>
    </Box>
  );
};

export default Experiences;