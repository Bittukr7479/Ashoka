// src/components/ReviewsSection.js
import React from 'react';
import { Container, Typography, Card, CardContent, Link, useTheme, useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import Rating from '@mui/material/Rating';
import Man1 from '../../Assets/avatar/man1.jpeg'
import Man2 from '../../Assets/avatar/man2.jpeg'
import Man3 from '../../Assets/avatar/man4.jpeg'
import Man4 from '../../Assets/avatar/man5.jpeg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const reviews = [
  { name: 'Emily Johnson', review: 'Ashoka transformed our inventory management, making it efficient and hassle-free!', avatarImg: Man1, ratingvalue: 4.5 },
  { name: 'Michael Brown', review: 'The analytics and real-time updates provided by Ashoka are exceptional and have significantly boosted our productivity.', avatarImg: Man2, ratingvalue: 4 },
  { name: 'Sarah Wilson', review: 'Highly recommend Ashoka for any business looking to optimize their stock levels and reduce waste.', avatarImg: Man3, ratingvalue: 4.5 },
  { name: 'David Lee', review: 'With Ashoka, our stockouts have drastically reduced, and our operations are running smoother than ever!', avatarImg: Man4, ratingvalue: 5 },
];


const ReviewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="lg" style={{ padding: '50px 0' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color='black'
        gutterBottom
        sx={{ paddingLeft: { xs: '16px', lg: '0' } }}
      >
        Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Card key={index} style={{ marginBottom: '20px', backgroundColor:'rgba(0, 211, 0, 0.2)', borderRadius:'0 20px' }}>
          <CardContent>
            <Stack direction='row' display='flex' alignItems='center'>
              <Avatar alt={review.name} src={review.avatarImg} />
              <Typography paddingLeft='10px' variant="h6" color='black' fontWeight='500'>{review.name}</Typography>
            </Stack>
            <Typography color='#5b5858'>{review.review}</Typography>
            <Rating name="half-rating-read" defaultValue={review.ratingvalue} precision={0.5} readOnly />
          </CardContent>
        </Card>
      ))}
      <Link href="#" underline="hover" sx={{color:'green', paddingLeft: { xs: '16px', lg: '0', fontWeight:'600', fontSize:'20px' }, display:'flex', alignItems:'center' }}>
        See more reviews
      <KeyboardArrowRightIcon/>
      </Link>
    </Container>
  );
};

export default ReviewsSection;
