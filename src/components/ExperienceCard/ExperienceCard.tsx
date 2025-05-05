import { Card, Typography, Box, CardMedia, IconButton } from "@mui/material";
import { useState } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const ExperienceCard = ({ title, images, description }: { 
  title: string;
  images: string[];
  description: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: 2
    }}>
      <Card sx={{
        width: '85%',
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: 6,
        borderRadius: '12px'
      }}>
        
        <Box sx={{
          height: '8%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          px: 2,
          py: 1
        }}>
          <Typography variant="h4" component="h2" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        <Box sx={{
          height: '60%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          bgcolor: 'primary.contrastText',
          position: 'relative'
        }}>
          <CardMedia
            component="img"
            image={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              bgcolor: 'primary.main',
              boxShadow: 3
            }}
          />
          
          {images.length > 1 && (
            <>
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                sx={{ 
                  position: 'absolute', 
                  left: '10px',
                  color: 'primary.contrastText',
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: 'secondary.main', color: 'secondary.contrastText' }
                }}
              >
                <SkipPreviousIcon />
              </IconButton>
              
              <IconButton 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                sx={{ 
                  position: 'absolute', 
                  right: '10px',
                  color: 'primary.contrastText',
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: 'secondary.main', color: 'secondary.contrastText' }
                }}
              >
                <SkipNextIcon />
              </IconButton>
              
              <Box sx={{
                position: 'absolute',
                bottom: '10px',
                left: 0,
                right: 0,
                textAlign: 'center'
              }}>
                <Typography variant="caption" sx={{
                  bgcolor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '12px'
                }}>
                  {`${currentImageIndex + 1}/${images.length}`}
                </Typography>
              </Box>
            </>
          )}
        </Box>

        <Box sx={{
          height: '32%',
          p: 3,
          overflowY: 'auto',
          bgcolor: 'primary.contrastText'
        }}>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem',
            lineHeight: '1.7',
            textAlign: 'justify'
          }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default ExperienceCard;