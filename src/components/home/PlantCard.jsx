import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import img1 from '../../Assets/plantImg/plant1.png';
import img2 from '../../Assets/plantImg/plant2.png';
import img3 from '../../Assets/plantImg/plant6.png';
import img4 from '../../Assets/plantImg/plant4.png';
import img5 from '../../Assets/plantImg/plant5.png';
import img6 from '../../Assets/plantImg/plant6.png';
import img7 from '../../Assets/plantImg/plant1.png';
import img8 from '../../Assets/plantImg/plant2.png';
import img9 from '../../Assets/plantImg/plant3.png';
import img10 from '../../Assets/plantImg/plant2.png';
import { Box, CardActionArea, Stack, useMediaQuery, useTheme } from '@mui/material';
import './CoreFeatures.css'
import Plant1 from '../Plants3DModel/Plant1'
import Plant2 from '../Plants3DModel/Plant2'
import Plant3 from '../Plants3DModel/Plant3'
import { useNavigate } from 'react-router-dom';
// Function to generate sharing URLs
const getWhatsAppShareURL = (message) => `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
const getFacebookShareURL = (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
const getInstagramProfileURL = (username) => `https://www.instagram.com/${username}`;


export default function ImgMediaCard() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const description = (path) => {
    navigate('/plant-info'); // Navigate to the path when a button is clicked
  };
  const navigate = useNavigate();
  const cardData = [
    { image: <Plant1 />, title: "Aloe Vera", description: "Aloe Vera is known for its soothing and healing properties for skin care." },
    { image: <Plant2 />, title: "Tulsi", description: "Tulsi, also known as holy basil, is widely used in Ayurvedic medicine." },
    { image: <Plant3 />, title: "Neem", description: "Neem is a popular medicinal plant, recognized for its antibacterial properties." },
    { image: <img srcSet={img1} src={img1} alt='img1' width={'300rem'} height={'300rem'} loading="lazy" />, title: "Lavender", description: "Lavender is known for its calming fragrance and therapeutic benefits." },
    { image: <img srcSet={img2} src={img2} alt='img2' width={'300rem'} height={'300rem'} loading="lazy" />, title: "Basil", description: "Basil is widely used in both traditional medicine and cooking." },
    { image: <img srcSet={img4} src={img4} alt='img4' width={'300rem'} height={'300rem'} loading="lazy" />, title: "Rosemary", description: "Rosemary has a woody fragrance and is used for its aromatic qualities." },
    { image: <img srcSet={img5} src={img5} alt='img5' width={'300rem'} height={'300rem'} loading="lazy" />, title: "Mint", description: "Mint is a popular herb, used for its refreshing and medicinal properties." },
    { image: <img srcSet={img6} src={img6} alt='img6' width={'300rem'} height={'300rem'} loading="lazy" />, title: "Jasmine", description: "Jasmine is well-known for its strong and pleasant fragrance." },
    { image: <img srcSet={img7} src={img7} alt='img7' width={'300rem'} height={'300rem'} loading="lazy" />, title: "Marigold", description: "Marigold flowers are often used for decoration and in traditional remedies." },
    { image: <img srcSet={img8} src={img8} alt='img8' width={'300rem'} height={'300rem'} loading="lazy" />, title: "Chamomile", description: "Chamomile is popular for its calming effects and is often used in teas." }
  ];
  const [openTooltip, setOpenTooltip] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const handleTooltipOpen = (card) => {
    setActiveCard(card);
    setOpenTooltip(true);
  };

  const handleTooltipClose = () => {
    setOpenTooltip(false);
    setActiveCard(null);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Typography fontWeight={'600'} variant='h4' display={'flex'} justifyContent={'center'}>
        Let's Exlpore 3D Herbal Plant
      </Typography>
      <div className="hide-scrollbar" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {cardData.map((card, index) => (
          <Card
            sx={{ minWidth: 280, maxWidth: '300px', flex: '0 0 auto', borderRadius: '0px 20px', border: '2px solid green', height: '30rem' }}
            key={index}
          >
            <CardActionArea sx={{ height: '50%' }}>
              {card.image}
            </CardActionArea>
            <CardContent sx={{ marginTop: '36px' }}>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip
                title={
                  <div style={{ display: 'flex', justifyContent: 'row' }}>
                    <Typography color='#fff'>Share <br /> More </Typography>
                    <Box display={'flex'} justifyContent={'column'}>
                      {/* WhatsApp Share */}
                      <IconButton href={getWhatsAppShareURL(`${card.title} - ${card.description}`)} target="_blank">
                        <WhatsAppIcon fontSize="large" color="success" />
                      </IconButton>

                      {/* Facebook Share */}
                      <IconButton href={getFacebookShareURL(window.location.href)} target="_blank">
                        <FacebookIcon fontSize="large" color="primary" />
                      </IconButton>

                      {/* Instagram Profile */}
                      <IconButton href={getInstagramProfileURL('your_instagram_username')} target="_blank">
                        <InstagramIcon fontSize="large" style={{ color: '#C13584' }} />
                      </IconButton>
                    </Box>
                  </div>
                }
                placement="top"
                arrow
              >
                <IconButton onClick={() => handleTooltipOpen(card)}>
                  <ShareIcon />
                </IconButton>
              </Tooltip>
              <IconButton onClick={() => description()} aria-label="read more">
                <ReadMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>

    </div>
  );
}
