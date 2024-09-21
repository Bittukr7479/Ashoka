import backgroundImage from '../Assets/Landing/img1.jpg'
import React from 'react';
import { Container, Typography, Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/system'; 
// import sideImg from '../assets/sideImg.png'; 
import { useNavigate } from 'react-router-dom';

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  height: '50px',
  width: '186px',
  backgroundColor: 'rgba(238, 229, 255, 0.74)',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  '&.button1': {
    backgroundColor: 'transparent',
    border: '2px solid white',
    '&:hover': {
      background: 'brown',
      height: '54px',
      width: '188px',
      color: 'black'
    },
  },
}));

const HeroContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
}));


const HeroSection = () => {
  const explore = (path) => {
    navigate('/explore'); // Navigate to the path when a button is clicked
  }; 
  const navigate = useNavigate(); // Initialize the navigate hook
  return (
    <HeroContainer maxWidth="false" sx={{ position: 'relative', top: '0%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '45rem' }}>
      <Box padding={{ xs: '0', md: '50px' }} display='flex' flexDirection='column' width={{ xs: '100%', md: '60%' }} height={{ xs: '39%', md: 'unset' }}>
        <Stack>
          <Typography variant="h2" component="h1" gutterBottom textAlign='left' sx={{ fontWeight: 'bold', fontSize: { xs: '40px', md: '65px' } }}>
            <span style={{
              background: 'black',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              “Explore, Learn <br/> and Discover
            </span>
            <span style={{ color: 'white' }}>{' '}
            the <br/> Healing Power of Nature”
            </span>
          </Typography>
        </Stack>

        <Typography variant="h6" component="p" gutterBottom textAlign='left' sx={{
          color: '#000000', fontWeight: '400',
          fontSize: { xs: '15px', md: '20px' }
        }}>
          Eliminate overstocking and under-stocking with CleverBooks. Built by inventory management experts, it leverages advanced technology to empower fast-growing startups.
        </Typography>
        <CustomButton className="button1" sx={{ margin: '15px 0px' }}
        onClick={() => explore()}
        >
          Let's Explore
        </CustomButton>
      </Box>
      <Box sx={{ backgroundColor: 'transparent' }} height={{ xs: '30%', md: 'unset' }}>
        <Box
          component="img"
          // src={sideImg}
          sx={{
            height: { xs: '21rem', md: '30rem' },
            width: { xs: '30rem', md: '30rem' },
          }}
          alt="Side Image"
        />
      </Box>
    </HeroContainer>
  );
};

export default HeroSection;
