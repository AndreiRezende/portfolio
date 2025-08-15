import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import Sofascore from "../../../../assets/images/Sofascore.png";
import RedditImg from "../../../../assets/images/reddit.png";
import PowerBI from "../../../../assets/images/powerbi.jpg";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "SofaScore Data Web Scraping",
            subtitle: "Jun 2025 - Jul 2025",
            srcImg: Sofascore,
            description: "This project consists of one part of a web scraping pipeline designed to collect football match data from SofaScore.",
            technologies: "Technologies: Python, SQL, Selenium, AWS S3",
            codeURL: "https://github.com/AndreiRezende/sofascore-scrap",
        },
        {
            title: "Reddit Investment Data Scraper",
            subtitle: "Mar 2024 - Aug 2024",
            srcImg: RedditImg,
            description: "This project is centered on the automated collection, preprocessing, and storage of textual data from a subreddit.",
            technologies: "Technologies: Python, Reddit API, spaCy, NLP, MongoDB",
            codeURL: "https://github.com/AndreiRezende/reddit-financial-scraper",
        },
        {
            title: "Basic Attacking Stats Dashboard - BI",
            subtitle: "May 2025",
            srcImg: PowerBI,
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: PowerBI, SQL, Excel",
            codeURL: "https://drive.google.com/file/d/1U4SNkTzGS34w7A3BAe3qHbSRUKjBoSZs/view?usp=drive_link",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{md: 6}} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection