import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import plant1 from '../../Assets/plantImg/plant1.png';
import plant2 from '../../Assets/plantImg/plant2.png';
import plant3 from '../../Assets/plantImg/plant3.png';
import plant4 from '../../Assets/plantImg/plant4.png';
import plant5 from '../../Assets/plantImg/plant5.png';
import plant6 from '../../Assets/plantImg/plant6.png';
import plant7 from '../../Assets/plantImg/plant7.png';
// import PlantModel1 from '.'
import PlantModel1 from '../Plants3DModel/Plant1';
import PlantModel2 from '../Plants3DModel/Plant2';
import PlantModel3 from '../Plants3DModel/Plant3';
import { useNavigate } from 'react-router-dom';

import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function TitlebarImageList() {
  // Function to generate sharing URLs
  const getWhatsAppShareURL = (message) => `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  const getFacebookShareURL = (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const getInstagramProfileURL = (username) => `https://www.instagram.com/${username}`;

  const [openTooltip, setOpenTooltip] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState(null);

  const handleTooltipOpen = (card) => {
    setActiveCard(card);
    setOpenTooltip(true);
  };

  const handleTooltipClose = () => {
    setOpenTooltip(false);
    setActiveCard(null);
  };

  const description = (path) => {
    navigate('/plant-info'); // Navigate to the path when a button is clicked
  };
  const navigate = useNavigate();
  return (
    <ImageList sx={{ width: 'auto', height: 'unset' }} style={{ gap: '50px' }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">
          <Typography variant='h4' color='success' fontWeight={'bold'}>
            List of Plant:
          </Typography>
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{ width: '16rem', height: '16rem' }}>
          {/* <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          /> */}
          {item.img}
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <Box>
                <Tooltip
                  title={
                    <div style={{ display: 'flex', justifyContent: 'row' }}>
                      <Typography color='#fff'>Share <br /> More </Typography>
                      <Box display={'flex'} justifyContent={'column'}>
                        {/* WhatsApp Share */}
                        <IconButton
                          //  href={getWhatsAppShareURL(`${card.title} - ${card.description}`)} 
                          target="_blank">
                          <WhatsAppIcon fontSize="large" color="success" />
                        </IconButton>

                        {/* Facebook Share */}
                        <IconButton
                          // href={getFacebookShareURL(window.location.href)}
                          target="_blank">
                          <FacebookIcon fontSize="large" color="primary" />
                        </IconButton>

                        {/* Instagram Profile (no direct sharing allowed) */}
                        <IconButton href={getInstagramProfileURL('your_instagram_username')} target="_blank">
                          <InstagramIcon fontSize="large" style={{ color: '#C13584' }} />
                        </IconButton>
                      </Box>
                    </div>
                  }
                  placement="top"
                  arrow
                >
                  <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  //  onClick={() => handleTooltipOpen(card)}
                  >
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={() => description()}
                  aria-label="read more"
                >
                  <ReadMoreIcon />
                </IconButton>
              </Box>
            }
          />
        </ImageListItem>

      ))}
    </ImageList>
  );
}

const itemData = [
  // {
  //   img: plant1,
  //   title: 'Plant 1',
  //   author: '@plantlover',
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  // {
  //   img: plant2,
  //   title: 'Plant 2',
  //   author: '@plantlover',
  // },
  // {
  //   img: plant3,
  //   title: 'Plant 3',
  //   author: '@plantlover',
  // },
  {
    img: <PlantModel1 />,
    title: 'Plant 4',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: <img srcSet={plant1} src={plant1} alt='plant1' loading="lazy" />,
    title: 'Plant 5',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: <img srcSet={plant2} src={plant2} alt='plant2' loading="lazy" />,
    title: 'Plant 6',
    author: '@plantlover',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: <PlantModel2 />,
    title: 'Plant 7',
    author: '@plantlover',
  },
  {
    img: <PlantModel3 />,
    title: 'Plant 1',
    author: '@plantlover',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: <img srcSet={plant7} src={plant7} alt='plant7' loading="lazy" />,
    title: 'Plant 2',
    author: '@plantlover',
  },
  // {
  //   img: plant3,
  //   title: 'Plant 3',
  //   author: '@plantlover',
  // },
  {
    img: <img srcSet={plant4} src={plant4} alt='plant4' loading="lazy" />,
    title: 'Plant 4',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: <img srcSet={plant5} src={plant5} alt='plant5' loading="lazy" />,
    title: 'Plant 4',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: <img srcSet={plant6} src={plant6} alt='plant6' loading="lazy" />,
    title: 'Plant 5',
    author: '@plantlover',
    cols: 2,
  },

];
