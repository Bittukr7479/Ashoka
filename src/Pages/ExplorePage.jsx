import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import filterImage from '../Assets/plantImg/plant4.png'; // Correct way to import images
import PlantList from '../components/Explore/PlantList';
import TuneIcon from '@mui/icons-material/Tune';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);

  return (
    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-around'} mt={3}>
      {/* <HomePage/> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <Stack flexDirection={'row'}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === 'string') {
                setValue({
                  title: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some((option) => inputValue === option.title);
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={plantsList}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  {option.title}
                </li>
              );
            }}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="Free solo with text demo" />
            )}
          />
          <IconButton>
            <TuneIcon fontSize='large' />
          </IconButton>
        </Stack>
        <Card sx={{ width: '100%', borderRadius: '10px', maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400px"
              image={filterImage}
              alt="Plant"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Aloe Vera
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, unde cum. Ut in aspernatur nisi?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <PlantList />
    </Stack>
  );
}

const plantsList = [
  { title: 'Aloe Vera', val: 1 },
  { title: 'Basil', val: 2 },
  { title: 'Chamomile', val: 3 },
  { title: 'Echinacea', val: 4 },
  { title: 'Fenugreek', val: 5 },
  { title: 'Ginger', val: 6 },
  { title: 'Lavender', val: 7 },
  { title: 'Mint', val: 8 },
  { title: 'Neem', val: 9 },
  { title: 'Peppermint', val: 10 },
  { title: 'Rosemary', val: 11 },
  { title: 'Sage', val: 12 },
  { title: 'Thyme', val: 13 },
  { title: 'Turmeric', val: 14 },
  { title: 'Holy Basil', val: 15 },
  { title: 'Lemongrass', val: 16 },
  { title: 'Oregano', val: 17 },
];
