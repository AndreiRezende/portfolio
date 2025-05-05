import { useState } from 'react';
import { Box, Card, Container, Grid, Typography, styled, Button } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import GradeIcon from '@mui/icons-material/Grade';

const About: React.FC = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('en');
  
  const texts = {
    en: {
      aboutMe: "About me",
      description: "I am a Computer Engineering student at UTFPR, with interests in data and automation, and more recently, I have been exploring Artificial Intelligence and Machine Learning—fields in which I am just beginning my studies. I conducted a research project (Scientific Initiation) focused on automating the collection and processing of textual data from the financial market, using Python, MongoDB, and Natural Language Processing (NLP) techniques, which allowed me to deepen my skills in data analysis and manipulation. I volunteer in the people management department of the extension project Grupo ELLP, contributing to internal organization and selection processes, as well as acting as a mentor in playful learning workshops on topics such as Web Development and Game Development, aimed at children and teenagers.",
      education: "Education",
      student: "Undergraduate Student",
      skills: "Skills",
      coefficient: "Absolute Coefficient",
      course: "Computer Engineering",
      grade: "0.9014",
      average: "Current weighted average"
    },
    pt: {
      aboutMe: "Sobre mim",
      description: "Sou estudante do curso de Engenharia de Computação na UTFPR, com interesses nas áreas de dados e automação e, mais recentemente, conhecendo mais sobre Inteligência Artificial e Machine Learning, que são áreas nas quais estou começando a estudar. Desenvolvi uma pesquisa (Iniciação Científica) focada na automação da coleta e tratamento de dados textuais do mercado financeiro, utilizando Python, MongoDB e técnicas de Processamento de Linguagem Natural (PLN), o que me permitiu aprofundar habilidades em análise e manipulação de dados. Atuo como voluntário no departamento de gestão de pessoas do projeto de extensão Grupo ELLP, contribuindo para a organização interna e de processos seletivos, além de participar como monitor nas oficinas de aprendizagem lúdica sobre temas como Desenvolvimento Web e Desenvolvimento de Jogos, voltadas a crianças e adolescentes.",
      education: "Educação",
      student: "Graduando",
      skills: "Habilidades",
      coefficient: "Coeficiente Absoluto",
      course: "Eng. de Computação",
      grade: "0,9014",
      average: "Média ponderada atual"
    }
  };

  const t = texts[language];

  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText, 
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: theme.palette.primary.dark
    }
  }));

  const skillsSet = [
    "Javascript", "Python", "SQL", "PostgreSQL", "Git", "HTML", "CSS", "PowerBI", "Scrapy", "NLP", "MongoDB"
  ];

  return (
    <>
      <Box 
        id="about-section" 
        sx={{ 
          backgroundColor: 'primary.main', 
          minHeight: '100vh',
          width: '100%',
          py: 5,
          color: 'primary.contrastText'
        }}
      >
        <Container maxWidth="lg">
          {/* Botão de alternar idioma */}
          <Box textAlign="right" mb={2}>
            <Button 
              variant="outlined" 
              onClick={() => setLanguage(lang => lang === 'en' ? 'pt' : 'en')}
              sx={{ 
                color: 'primary.contrastText', 
                borderColor: 'primary.contrastText',
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'secondary.main',
                  color: 'primary.dark',
                  transform: 'scale(1.1)'
                }
              }}
            >
              {language === 'pt' ? 'PT' : 'EN'}
            </Button>
          </Box>

          <Box id="about" pt={5} mb={3}>
            <Typography variant="h2" textAlign="center">{t.aboutMe}</Typography>
          </Box>
          <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
            <Grid size={{ xs: 9, md: 2.5 }}>
              <AnimationComponent moveDirection="right">
                <StyledCard variant="outlined">
                  <SchoolIcon />
                  <Typography textAlign="center" fontWeight={600}>{t.education}</Typography>
                  <Typography textAlign="center">{t.course}</Typography>
                  <Typography textAlign="center" variant="body2">{t.student}</Typography>
                </StyledCard>
              </AnimationComponent>
            </Grid>
            <Grid size={{ xs: 9, md: 2.5 }}>
              <AnimationComponent moveDirection="left">
                <StyledCard variant="outlined">
                  <GradeIcon />
                  <Typography textAlign="center" fontWeight={600}>{t.coefficient}</Typography>
                  <Typography textAlign="center">{t.grade}</Typography>
                  <Typography textAlign="center" variant="body2">{t.average}</Typography>
                </StyledCard>
              </AnimationComponent>
            </Grid>
          </Grid>
          <Box pb={1}>
            <Typography fontWeight={500}>
              {t.description}
            </Typography>
          </Box>
          <hr />
          <Box id="skills" pt={1} mb={3}>
            <Typography variant="h3" textAlign="center" fontWeight={400}>{t.skills}</Typography>
          </Box>
          <Box mb={5}>
            <Grid container spacing={3} justifyContent="center">
              {skillsSet.map((skill, index) => (
                <Grid size={{ xs: 5, sm: 4, md: 2, lg: 2}} key={index}>
                  <StyledCard variant="outlined">
                    {skill}
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default About;