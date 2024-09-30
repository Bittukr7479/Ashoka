import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GrassIcon from '@mui/icons-material/Grass';
import useScrollTrigger from '@mui/material/useScrollTrigger'; // Import useScrollTrigger
import Slide from '@mui/material/Slide'; // Import Slide for AppBar hide effect
import AnchorTemporaryDrawer from './components/home/AnchorTemporaryDrawer';
import { Link } from '@mui/material';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/home' },
  { label: 'Garden', path: '/garden' },
  { label: 'Explore', path: '/explore' },
  { label: 'My Garden', path: '/my-garden' }
];

// Hide-on-scroll AppBar
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (path) => {
    navigate(path); // Navigate to the path when a button is clicked
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#487307', fontWeight: 'bold' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <GrassIcon fontSize="large" />ASHOKA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link variant='body1' padding={'16px 6px'} sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => handleNavClick(item.path)}>
              <ListItemText primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </List>
      <AnchorTemporaryDrawer />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar with useScrollTrigger */}
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            background: 'linear-gradient(90deg, rgba(31,236,11,1) 7%, rgba(0,124,60,1) 89%)',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              display={'flex'}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', color: '#487307', fontWeight: 'bold' }}
            >
              <Box>
                <GrassIcon fontSize="large" />
              </Box>
              ASHOKA
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '30px' }}>
              {navItems.map((item) => (
                <Link
                variant='body1'
                  padding={'16px 6px'}
                  key={item.label}
                  sx={{
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease-in-out', // Hover transition effect
                    '&:hover': { color: '#000' }, // Hover effect to change text color to black
                  }}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </Link>
              ))}
              {false?<></>:<>
              <Button variant='outlined' color='white' width='fit-content'>
                Dashboard
              </Button>
              <AnchorTemporaryDrawer />
              </>
              }
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: '-webkit-fill-available' }}>
        <Toolbar />
        {/* Page content goes here */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
