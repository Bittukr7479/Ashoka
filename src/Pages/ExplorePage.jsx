import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, Fade, FormControlLabel, Grid2, IconButton, Paper, Popper, Stack, Typography } from '@mui/material';
import filterImage from '../Assets/plantImg/plant4.png'; // Correct way to import images
import PlantList from '../components/Explore/PlantList';
// import filterPlant from '@mui/icons-material/Tune';
import Grid from '@mui/material/Grid';
import TuneIcon from '@mui/icons-material/Tune';
// import Aloevera from '../components/Plants3DModel/Plant1'
import Aloevera from '../Pages/Landing3dPlant'

const FilterPlant = function PositionedPopper() {
  const mockPlants = [
    { id: 1, name: "Ashwagandha", botanicalName: "Withania somnifera", uses: ["Stress relief", "Immunity"], region: "India", type: "Medicinal", image: "/placeholder.svg" },
    { id: 2, name: "Tulsi", botanicalName: "Ocimum sanctum", uses: ["Respiratory health", "Immunity"], region: "India", type: "Medicinal", image: "/placeholder.svg" },
    { id: 3, name: "Aloe Vera", botanicalName: "Aloe barbadensis miller", uses: ["Skin care", "Digestive health"], region: "Africa", type: "Medicinal", image: "/placeholder.svg" },
    // Add more mock plants as needed
  ]

  const filterOptions = {
    medicinalUses: ["Stress relief", "Immunity", "Respiratory health", "Skin care", "Digestive health"],
    regions: ["India", "Africa", "South America"],
    types: ["Medicinal", "Aromatic", "Edible"],
    botanicalClassifications: ["Herb", "Shrub", "Tree"],
    cultivationMethods: ["Organic", "Conventional", "Hydroponic"]
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3, width: '50rem' }}>
              <Typography variant="h6" align="center" gutterBottom>
                Filter Plants
              </Typography>
              <Box sx={{ display: 'grid', gap: 2 }}>
                {Object.entries(filterOptions).map(([category, options]) => (
                  <Card key={category} sx={{ p: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      {category}
                    </Typography>
                    {options.map((option) => (
                      <FormControlLabel
                        key={option}
                        control={<Checkbox />}
                        label={option}
                      />
                    ))}
                  </Card>
                ))}
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>

      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid
          item
          container
          xs={6}
          direction="column"
          sx={{ alignItems: 'flex-end' }}
        >
          <Grid item>
            <IconButton onClick={handleClick('right-start')} >
              <TuneIcon fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
}

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);

  return (
    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-around'} pt={3} backgroundColor='#defff0'>
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
          {/* <IconButton> */}
          <FilterPlant />
          {/* </IconButton> */}
        </Stack>
        <Card sx={{ width: '100%', borderRadius: '10px', maxWidth: 345 }}>
          <Box height={'50%'}>
            <Aloevera/>
          </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color='success' fontWeight={'bold'} mt={'20px'}>
                Aloe Vera
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <b>Aloe vera </b>is a succulent plant with thick, gel-filled leaves, known for its medicinal uses.
              It helps heal burns, soothes skin, and supports digestion.              </Typography>
            </CardContent>
            
          {/* <CardActionArea>
          </CardActionArea> */}
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
