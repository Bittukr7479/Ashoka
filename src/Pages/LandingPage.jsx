import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import './LandingPage.css';
import img1 from '../Assets/image/img1.jpg';
import img2 from '../Assets/image/img2.jpg';
import img3 from '../Assets/image/img3.jpg';
import img4 from '../Assets/image/img4.jpg';
import Landing3dPlant from './Landing3dPlant.jsx';
import { Box, Button, colors, Dialog, DialogActions, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import FAQ from '../components/home/FAQ';
import CoreFeatures from '../components/home/CoreFeatures';
import PlantCard from '../components/home/PlantCard.jsx';
import LoginPage from "./LoginPage.jsx";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current, // Trigger the animation when this element is in view
        start: "top 80%", // Start animation when top of element is 80% from top of the viewport
        end: "bottom 30%", // End animation when bottom of element is 20% from top of the viewport
        toggleActions: "play none none none", // Play animation on scroll
      }
    });

    tl.fromTo(
      textRef.current.querySelectorAll('.animated-text'),
      { opacity: 0, y: 60 }, // Initial state: opacity 0, move text 50px down
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power2.out" } // End state: opacity 1, move to original position
    );
  }, []);
  
  const textRef = useRef(null); 
  const description = (path) => {
    navigate('/explore'); // Navigate to the path when a button is clicked
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const app = useRef(null);
  const glowEffectRef = useRef([]);
  const sliderRef = useRef(null);
  // Initialize sliderItems and thumbnailItems as state
  const [sliderItems, setSliderItems] = useState([img1, img2, img3, img4]);
  const [thumbnailItems, setThumbnailItems] = useState([img1, img2, img3, img4]);
  const thumbnailRef = useRef(null);
  const leavesRef = useRef([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  // Initialize GSAP animation for leaf movement
  useEffect(() => {
    const moveLeaves = (e) => {
      leavesRef.current.forEach((leaf, index) => {
        gsap.to(leaf, {
          x: e.clientX + Math.random() * 50 - 25,
          y: e.clientY + Math.random() * 50 - 25,
          rotation: "random(0, 360)",
          scale: "random(0.5, 1)",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.02,
        });

        gsap.to(leaf, {
          y: "+=100",
          opacity: 0,
          duration: 1,
          delay: 0.5 + index * 0.02,
          ease: "power1.in",
        });
      });
    };

    const container = app.current;
    container.addEventListener("mousemove", moveLeaves);

    return () => {
      container.removeEventListener("mousemove", moveLeaves);
    };
  }, []);

  // Function to create glow effect on cursor movement
  const createGlowEffect = (e) => {
    glowEffectRef.current.forEach((glow, index) => {
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        scale: 1.5,
        opacity: 0.8,
        background: "rgba(255, 255, 0, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(glow, {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
      });
    });
  };

  useEffect(() => {
    const container = app.current;
    container.addEventListener("mousemove", createGlowEffect);

    return () => {
      container.removeEventListener("mousemove", createGlowEffect);
    };
  }, []);

  // Define the moveSlider function
  const moveSlider = (direction) => {
    if (direction === 'next') {
      // Move the first item to the end of the array
      setSliderItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setThumbnailItems((prevThumbnails) => [...prevThumbnails.slice(1), prevThumbnails[0]]);
    } else {
      // Move the last item to the start of the array
      setSliderItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
      setThumbnailItems((prevThumbnails) => [prevThumbnails[prevThumbnails.length - 1], ...prevThumbnails.slice(0, -1)]);
    }

    // Add and remove animation class
    sliderRef.current.classList.add(direction);
    sliderRef.current.addEventListener('animationend', () => {
      sliderRef.current.classList.remove(direction);
    }, { once: true });
  };

  return (
    <div ref={app} style={{ marginTop: '-64px', position: 'relative' }}>
      {/* Create leaf elements and store them in ref */}
      {/* {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (leavesRef.current[i] = el)}
          className="leaf"
          style={{
            width: '24px',
            height: '24px',
            position: 'fixed',
            zIndex: '9999',
            backgroundColor: 'rgb(255 246 156)',
            boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)',
            borderRadius: '50%',
            pointerEvents: 'none',
            opacity: 0,
          }}
        ></div>
      ))} */}

      {/* Create glow effect elements and store them in ref */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (glowEffectRef.current[i] = el)}
          // ref={(el) => (leavesRef.current[i] = el)}

          className="glow-effect"
          style={{
            width: '13px',
            height: '13px',
            position: 'fixed',
            borderRadius: '50%',
            pointerEvents: 'none',
            opacity: 0,
            backgroundColor: '#FFD700',
            boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)',
            zIndex: '9999',
          }}
        ></div>
      ))}

      {/* Slider Section */}
      <div className="slider" ref={sliderRef}>
        <div className="list">
          {sliderItems.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {thumbnailItems.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>

        <Box
          style={{
            zIndex: '220',
            position: 'absolute',
            width: 'inherit',
            display: 'flex',
            justifyContent: 'flex-start',
            width: '50%',
            color: 'green',
            flexDirection: 'column'
          }}
        >
          <Box height={'20rem'} display={isMobile? 'none':'unset'}>
            <Landing3dPlant />
          </Box>
          <Stack height={isMobile?'40rem':'unset'} justifyContent={isMobile? 'center' :'unset'} ref={textRef} width={isMobile? '17rem' : 'unset'} alignItems={'flex-start'} ml={isMobile? '3rem':'5rem'}>
            <Typography className="animated-text" variant="h2" fontWeight={'600'} color="#00ff00" style={{textShadow:'rgb(15 15 15) 2px 2px'}}>
              Ashoka
            </Typography>
            <Typography className="animated-text" variant="body1" color="white" gutterBottom margin={'17px 0px 21px 0px'} style={{textShadow:'rgb(15 15 15) 2px 2px'}}>
              Ashoka is a digital platform that harnesses the healing power of plants and herbs by combining ancient knowledge with modern technology. It offers seamless access to natural remedies, making traditional herbal wisdom both accessible and relevant for today’s generation.
            </Typography>
            <Button className="animated-text" onClick={() => description()} variant="contained" color='success'>
              Explore More
            </Button>
          </Stack>
        </Box>
        <div className="nextPrevArrows">
          <button className="prev" onClick={() => moveSlider('prev')}>‹</button>
          <button className="next" onClick={() => moveSlider('next')}>›</button>
        </div>
      </div>

      {/* Additional Sections */}
      <Box sx={{ display: 'flex', justifyContent: 'start', backgroundColor: '#defff0' }}>
        <FAQ />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#defff0',
        }}
      >
        <Typography
          display={'flex'}
          justifyContent={'center'}
          fontWeight={'600'}
          m={'30px 30px 20px 30px'}
          mb={isMobile? '4.5rem': 'unset'}
          variant="h4"
          width={'inherit'}
        >
          What Our users say
        </Typography>
        <CoreFeatures />
        <PlantCard />
      </Box>
      <Box
        height={'16rem'}
        backgroundColor='#defff0'
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography variant="h4">Discover the Future of Herbal garden</Typography>
        <Button variant="contained" color="success" onClick={handleClickOpen} sx={{ mt: '20px' }}>
          Sign Up
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <LoginPage />
          <DialogActions>
            {/* <Button onClick={handleClose}>Do Later</Button> */}
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}

export default LandingPage;
