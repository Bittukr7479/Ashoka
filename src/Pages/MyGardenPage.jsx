import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, IconButton, Link, Typography } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import plant1 from '../Assets/plantImg/plant1.png';
import plant2 from '../Assets/plantImg/plant2.png';
import plant3 from '../Assets/plantImg/plant3.png';
import plant4 from '../Assets/plantImg/plant4.png';
import plant5 from '../Assets/plantImg/plant5.png';
import plant6 from '../Assets/plantImg/plant6.png';
import plant7 from '../Assets/plantImg/plant7.png';
import { useNavigate } from 'react-router-dom';

const plantData = [
  {
    img: plant1,
    description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</>,
    isBookmarked: true,
  },
  {
    img: plant2,
    description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</>,
    isBookmarked: false,
  },
  // {
  //   img: plant3,
  //   description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</>,
  //   isBookmarked: true,
  // },
  {
    img: plant4,
    description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</>,
    isBookmarked: false,
  },
  {
    img: plant5,
    description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</>,
    isBookmarked: true,
  },
  {
    img: plant6,
    description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</>,
    isBookmarked: false,
  },
  {
    img: plant7,
    description: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</>,
    isBookmarked: true,
  },
];

export default function Variants() {
  
  const description = (path) => {
    navigate('/plant-info'); // Navigate to the path when a button is clicked
  }; 
  const navigate = useNavigate(); // Initialize the navigate hook
  const [bookmarks, setBookmarks] = useState(plantData.map(item => item.isBookmarked));

  const toggleBookmark = (index) => {
    setBookmarks(prev => prev.map((bookmark, i) => (i === index ? !bookmark : bookmark)));
  };

  return (
    <Stack display="flex" alignItems="center" direction="column" justifyContent="center" spacing={6} mt="2rem">
      <Typography variant="h3" color="#964B00" fontWeight="bold">
        My Garden Plant
      </Typography>
      {plantData.map((item, index) => (
        <Box key={index} display="flex" gap="30px">
          <Paper sx={{ height: '160px', width: '200px', padding: '20px', position: 'relative' }}>
            <IconButton
              style={{ color: 'black', position: 'absolute', top: '10px', right: '10px' }}
              onClick={() => toggleBookmark(index)}
            >
              {bookmarks[index] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
            <img src={item.img} alt="Plant" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
          </Paper>
          <Paper sx={{ height: '160px', width: '600px', padding: '20px' }}>
            <Typography>{item.description}</Typography>
            <Link onClick={() => description()}>read more</Link>
          </Paper>
        </Box>
      ))}
    </Stack>
  );
}
