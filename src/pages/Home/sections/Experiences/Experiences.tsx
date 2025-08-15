import { Box, IconButton, Typography, Container, Button } from "@mui/material";
import { useState } from "react";
import ExperienceCard from "../../../../components/ExperienceCard/ExperienceCard";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Monitoria from "../../../../assets/images/monitoria.jpg";
import Sicite from "../../../../assets/images/sicite.jpg";
import Certificado from "../../../../assets/images/certificado_sicite.jpg"

const experiencesTranslations = {
    en: {
        sectionTitle: "Experiences",
        experiences: [
        {
            title: "Scientific Initiation",
            description: "I conducted a scientific research project focused on automating the news collection process from multiple sources about the financial market. In this project, I automated the collection, preprocessing, and storage of textual data related to the Brazilian stock market. The main goal was to create a solid textual database, with the data already preprocessed using Natural Language Processing (NLP) techniques, to support future predictive models aiming to forecast market fluctuations. This work was one of those selected by my university to be personally presented at the SEI-SICITE 2024 event. It was an enriching experience that provided me with valuable exposure to the academic environment and allowed me to deepen my understanding of the research process, as well as to exchange knowledge with other works and researchers."
        },
        {
            title: "Teaching Assistant for Calculus 2",
            description: "I served as a teaching assistant for the Differential and Integral Calculus 2 course in 2021, an experience that enhanced my communication and teaching skills. During this period, I had the opportunity to help other students understand course concepts, which allowed me to develop a clearer and more effective approach to teaching and conveying knowledge."
        }
        ]
    },
    pt: {
        sectionTitle: "Experiências",
        experiences: [
        {
            title: "Iniciação Científica",
            description: "Realizei uma iniciação científica com foco na automação do processo de coleta de notícias de múltiplas fontes sobre o mercado financeiro. Neste projeto, automatizei a coleta, o pré-processamento e o armazenamento de dados textuais relacionados ao mercado acionário brasileiro. O objetivo principal foi criar uma sólida base textual, com os dados já pré-processados por meio de técnicas de Processamento de Linguagem Natural (PLN), para servir de apoio a futuros modelos preditivos que busquem prever a oscilação desse mercado. Este trabalho foi um dos selecionados pela minha faculdade para ser apresentado pessoalmente no evento SEI-SICITE 2024. Foi uma experiência enriquecedora que me proporcionou um valioso contato com o ambiente acadêmico e me permitiu aprofundar minha compreensão sobre o processo de pesquisa, além de trocar conhecimentos com outros trabalhos e pesquisadores."
        },
        {
            title: "Monitor da disciplina de Cálculo Diferencial e Integral 2",
            description: "Atuei como monitor da disciplina de Cálculo Diferencial e Integral 2 em 2021, uma experiência que aprimorou minhas habilidades de comunicação e didática. Durante esse período, tive a oportunidade de auxiliar outros estudantes a compreenderem conceitos da matéria, o que me permitiu desenvolver uma abordagem mais clara e eficaz para ensinar e transmitir conhecimento."
        }
        ]
    }
};

const experiencesData = [
    {
      images: [
        Sicite,
        Certificado
      ]
    },

    {
      images: [
        Monitoria
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