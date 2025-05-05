import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import ExperienceCard from "../../../../components/ExperienceCard/ExperienceCard";

const experiences = [
    {
      title: "Iniciação Científica",
      images: [
        "/assets/images/sicite.jpg",
        "/assets/images/certificado_sicite.jpg"
      ],
      description: "Iniciação científica..."
    },
    {
      title: "Monitoria de Cálculo",
      images: [
        "/assets/images/monitoria.jpg"
      ],
      description: "Fui monitor bolsista da disciplina Cálculo..."
    }
  ];

const Experiences = () => {

    const [currentIndex] = useState(0);

    return (
        <Box 
        id="experiences"
        sx={{
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'secondary.dark',
            color: 'primary.contrastText'
        }}
        >
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" mb={4}>
                    Experiences
                </Typography>
            </Container>
            <Box sx={{
                width: `${experiences.length * 100}%`,
                height: 'calc(100vh - 120px)',
                display: 'flex',
                position: 'relative',
                left: `${-currentIndex * 100}%`,
                transition: 'left 0.5s ease'
            }}>
                {experiences.map((exp, index) => (
            <Box key={index} sx={{ width: '100%', height: '100%' }}>
                <ExperienceCard {...exp} />
            </Box>
        ))}
        </Box>
        </Box>
    );
};

export default Experiences;