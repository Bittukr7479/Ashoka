import * as React from 'react';
import { Avatar, Box, Typography, Button, Paper, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Drawer } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RightSideDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ right: open });
  };

  const profile = () => (
    <Box textAlign="center" p={2}>
      <Avatar
        alt="Profile Picture"
        src="https://via.placeholder.com/150"
        sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
      />
      <Typography variant="h5" fontWeight="bold">
        John Doe
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Frontend Developer | React Enthusiast | Open Source Contributor
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" fontWeight="bold">
        Contact Info
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Email: john.doe@example.com
      </Typography>
    </Box>
  );

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {profile()} {/* Profile Section */}
      <Divider />
      <List>
        {['Webiner', 'Bookmarks', 'Share Plant', 'Buy Plants'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Suggestion', 'Collection', 'Export Support'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton color="primary" aria-label="profile" onClick={toggleDrawer(true)}>
        <AccountCircleIcon fontSize="large" sx={{color:'white'}}/>
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
