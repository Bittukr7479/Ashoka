import React, { useState } from 'react';
import GrassIcon from '@mui/icons-material/Grass';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Stack, Button, Divider, Link, TextField, Typography, Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Alert, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

function LoginPage() {
  
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Categories = [
    {
      value: '1',
      label: 'Student',
    },
    {
      value: '2',
      label: 'Researcher',
    },
    {
      value: '3',
      label: 'Enthusiast',
    },
    {
      value: '4',
      label: 'Educator',
    }
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [newUserDetails, setNewUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    selectCategory:''
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleUserDetailsCreate = (event) => {
    const { name, value } = event.target;
    setNewUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUserDetailsCreateSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register', newUserDetails, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };


  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  return (
    <Stack maxWidth={'30rem'} gap={'3px'} sx={{ p: '8px 26px' }} justifyContent={'center'} alignItems={'center'}>
      <GrassIcon sx={{ fontSize: isMobile?'35px':'50px', color: 'green' }} />
      <Typography variant={isMobile?"h5":'h4'} color='success' textAlign={'center'}>
        Ashoka 3D Virtual Herbal
      </Typography>
      <Typography variant={isMobile?"h5":'h4'} color='success' textAlign={'center'}>
        Garden
      </Typography>
      <Typography color='#1cce39'>
        Connect with nature, digitally
      </Typography>
      <form style={{ width: '100%' }}>
        <TextField
          id="name"
          name='name'
          label="Name"
          size='small'
          color='success'
          value={newUserDetails.name}
          onChange={handleUserDetailsCreate}
          fullWidth
        />
        <TextField
          size='small'
          name='email'
          id="email"
          label="Email"
          color='success'
          value={newUserDetails.email}
          onChange={handleUserDetailsCreate}
          fullWidth
          style={{ marginTop: '10px' }}
        />
        <FormControl variant="outlined" size='small' fullWidth style={{ marginTop: '10px' }}>
          <InputLabel htmlFor="password" color='success'>Password</InputLabel>
          <OutlinedInput
            id="password"
            name='password'
            label="Password"
            color='success'
            value={newUserDetails.password}
            onChange={handleUserDetailsCreate}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                  color='success'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          size='small'
          name='selectCategory'
          id="selectCategory"
          color='success'
          label="Categories"
          helperText="Please select your categories"
          value={newUserDetails.selectCategory}
          onChange={handleUserDetailsCreate}
          fullWidth
          select
          style={{ marginTop: '10px' }}
        >
          {Categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant='contained' color='success' onClick={handleUserDetailsCreateSubmit} fullWidth style={{ marginTop: '15px' }}>
          Login
        </Button>
      </form>
      <Link variant='body2' color='success' mt={2}>
        Forget Password?
      </Link>
      <Divider sx={{ width: '100%', margin: '8px 0px' }}>
        <Typography color="success" sx={{ px: 1, backgroundColor: 'white' }}>
          Or continue with
        </Typography>
      </Divider>
      <Box display={'flex'} gap={'20px'} width={'-webkit-fill-available'}>
        <Button color='success' fullWidth variant='outlined' startIcon={<GoogleIcon />}>Google</Button>
        <Button color='success' fullWidth variant='outlined' startIcon={<FacebookIcon />}>Facebook</Button>
      </Box>
      <Typography color='success' mt={2}>
        Don't have an account?&nbsp;
        <Link color='success' fontWeight={'bold'}>
          Create an Account
        </Link>
      </Typography>
    </Stack>
  );
}

export default LoginPage;
