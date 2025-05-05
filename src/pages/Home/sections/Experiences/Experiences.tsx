import { Box, IconButton, Typography, Container } from "@mui/material";
import { useState } from "react";
import ExperienceCard from "../../../../components/ExperienceCard/ExperienceCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextExperience = () => {
      setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
    };
  
    const prevExperience = () => {
      setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
    };

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
            <IconButton 
                onClick={prevExperience}
                sx={{ 
                position: 'absolute', 
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'primary.main',
                bgcolor: 'primary.contrastText',
                zIndex: 3,
                '&:hover': { bgcolor: 'primary.dark', color: 'primary.contrastText' }
                }}
            >
                <ChevronLeftIcon fontSize="large" />
            </IconButton>

            <IconButton 
                onClick={nextExperience}
                sx={{ 
                position: 'absolute', 
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'primary.main',
                bgcolor: 'primary.contrastText',
                zIndex: 3,
                '&:hover': { bgcolor: 'primary.dark', color: 'primary.contrastText' }
                }}
            >
                <ChevronRightIcon fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default Experiences;