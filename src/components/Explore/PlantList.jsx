import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

import plant1 from '../../Assets/plantImg/plant1.png';
import plant2 from '../../Assets/plantImg/plant2.png';
import plant3 from '../../Assets/plantImg/plant3.png';
import plant4 from '../../Assets/plantImg/plant4.png';
import plant5 from '../../Assets/plantImg/plant5.png';
import plant6 from '../../Assets/plantImg/plant6.png';
import plant7 from '../../Assets/plantImg/plant7.png';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 'auto', height: 'unset' }} style={{ gap: '50px' }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">
          <Typography variant='h5'>
            List of Plant
          </Typography>
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{width:'16rem', height:'16rem'}}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
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
    img: plant4,
    title: 'Plant 4',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: plant5,
    title: 'Plant 5',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: plant6,
    title: 'Plant 6',
    author: '@plantlover',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: plant7,
    title: 'Plant 7',
    author: '@plantlover',
  },
  {
    img: plant1,
    title: 'Plant 1',
    author: '@plantlover',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: plant2,
    title: 'Plant 2',
    author: '@plantlover',
  },
  // {
  //   img: plant3,
  //   title: 'Plant 3',
  //   author: '@plantlover',
  // },
  {
    img: plant4,
    title: 'Plant 4',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: plant4,
    title: 'Plant 4',
    author: '@plantlover',
    cols: 2,
  },
  {
    img: plant5,
    title: 'Plant 5',
    author: '@plantlover',
    cols: 2,
  },
  
];
