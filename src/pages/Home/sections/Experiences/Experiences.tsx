import { Box, IconButton, Typography, Container, Button } from "@mui/material";
import { useState } from "react";
import ExperienceCard from "../../../../components/ExperienceCard/ExperienceCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const experiencesTranslations = {
    en: {
        sectionTitle: "Experiences",
        experiences: [
        {
            title: "Scientific Initiation",
            description: "Research on automation of financial data using Python and NLP..."
        },
        {
            title: "Calculus Tutoring",
            description: "I taught reinforcement classes for Engineering students..."
        }
        ]
    },
    pt: {
        sectionTitle: "Experiências",
        experiences: [
        {
            title: "Iniciação Científica",
            description: "Pesquisa em automação de dados financeiros usando Python e NLP..."
        },
        {
            title: "Monitoria de Cálculo",
            description: "Ministrei aulas de reforço para alunos de Engenharia..."
        }
        ]
    }
};

const experiencesData = [
    {
      images: [
        "/assets/images/sicite.jpg",
        "/assets/images/certificado_sicite.jpg"
      ]
    },
    
    {
      images: [
        "/assets/images/monitoria.jpg"
      ]
    }
  ];

const Experiences = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [language, setLanguage] = useState<'en' | 'pt'>('en');
    const { sectionTitle, experiences } = experiencesTranslations[language];
    
    const combinedExperiences = experiences.map((exp, index) => ({
        ...exp,
        images: experiencesData[index].images
      }));

    const nextExperience = () => {
    setCurrentIndex((prev) => (prev === combinedExperiences.length - 1 ? 0 : prev + 1));
    };

    const prevExperience = () => {
    setCurrentIndex((prev) => (prev === 0 ? combinedExperiences.length - 1 : prev - 1));
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
            color: 'primary.contrastText',
            pt: 8
        }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ textAlign: 'right', mb: -4}}>
                    <Button
                        variant="outlined"
                        onClick={() => setLanguage(lang => lang === 'en' ? 'pt' : 'en')}
                        sx={{
                        color: 'primary.dark',
                        borderColor: 'primary.dark',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                            transform: 'scale(1.1)',
                            borderColor: 'secondary.dark',
                            color: 'primary.contrastText'
                        }
                        }}
                    >
                        {language === 'en' ? 'PT' : 'EN'}
                    </Button>
                </Box>
                <Typography 
                    variant="h2" 
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                >
                    {sectionTitle}
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
                {combinedExperiences.map((exp, index) => (
                    <Box key={index} sx={{ width: '100%', height: '100%' }}>
                        <ExperienceCard 
                            title={exp.title}
                            images={exp.images}
                            description={exp.description}
                        />
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