import React from 'react'
import GrassIcon from '@mui/icons-material/Grass';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Stack, Button, Divider, Link, TextField, Typography, Box, styled, MenuItem } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginPage() {
  const currencies = [
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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Stack maxWidth={'30rem'} gap={'3px'} p={4} justifyContent={'center'} alignItems={'center'}
    //  sx={{backgroundColor:'#79e0586e'}}
    >
      <GrassIcon sx={{ fontSize: '50px', color: 'green' }} />
      <Typography variant='h4' color='success'>
        Ashoka 3D Virtual Herbal
      </Typography>
      <Typography variant='h4' color='success'>
        Garden
      </Typography>
      <Typography color='#1cce39'>
        Connect with nature, digitally
      </Typography>
      <Stack gap={'30px'} mt={1} width={'-webkit-fill-available'} >
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="email"
          color='success'
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" color='success'>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            color='success'
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
            label="Password"
          />
        </FormControl>
        <TextField
                  color='success'
          id="select-categories"
          select
          label="Select Role"
          // defaultValue="1"
          helperText="Please select your roll"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}
        <Button variant='contained' color='success'>
          Login
        </Button>
      </Stack>
      <Link variant='body2' color='success' mt={2}>
        Forget Password?
      </Link>
      <Divider sx={{ width: '100%', margin:'8px 0px' }}>
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
  )
}

export default LoginPage