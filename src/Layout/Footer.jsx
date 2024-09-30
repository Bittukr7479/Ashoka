import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2e7d32', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section for About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Virtual Herbal Garden
            </Typography>
            <Typography variant="body2">
              The Virtual Herbal Garden is an initiative to bring the knowledge
              of medicinal plants closer to everyone, bridging the gap between
              tradition and technology.
            </Typography>
          </Grid>
          
          {/* Section for Useful Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Explore Plants
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Virtual Tours
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Contact Us
            </Link>
          </Grid>
          
          {/* Section for Contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Ministry of AYUSH <br />
              Email: info@virtualherbalgarden.com <br />
              Phone: +91 12345 67890
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Virtual Herbal Garden. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
