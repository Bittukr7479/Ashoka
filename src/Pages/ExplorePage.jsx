import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, Fade, FormControlLabel, Grid2, IconButton, Paper, Popper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import filterImage from '../Assets/plantImg/plant4.png';
import PlantList from '../components/Explore/PlantList';
import Grid from '@mui/material/Grid';
import TuneIcon from '@mui/icons-material/Tune';
import Aloevera from '../Pages/Landing3dPlant'

const FilterPlant = function PositionedPopper() {
  const mockPlants = [
    { id: 1, name: "Ashwagandha", botanicalName: "Withania somnifera", uses: ["Stress relief", "Immunity"], region: "India", type: "Medicinal", image: "/images/ashwagandha.png" },
    { id: 2, name: "Tulsi", botanicalName: "Ocimum sanctum", uses: ["Respiratory health", "Immunity"], region: "India", type: "Medicinal", image: "/images/tulsi.png" },
    { id: 3, name: "Aloe Vera", botanicalName: "Aloe barbadensis miller", uses: ["Skin care", "Digestive health"], region: "Africa", type: "Medicinal", image: "/images/aloevera.png" },
    // Add more mock plants as needed
  ];

  const filterOptions = {
    medicinalUses: ["Stress relief", "Immunity", "Respiratory health", "Skin care", "Digestive health"],
    regions: ["India", "Africa", "South America"],
    types: ["Medicinal", "Aromatic", "Edible"],
    botanicalClassifications: ["Herb", "Shrub", "Tree"],
    cultivationMethods: ["Organic", "Conventional", "Hydroponic"]
  };

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


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack display={'flex'} flexDirection={isMobile?'column': 'row'} justifyContent={'space-around'} pt={3} backgroundColor='#defff0' pb={'40px'}>
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
              if (typeof option === 'string') {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.title;
            }}
            renderOption={(props, option) => (
              <li {...props}>
                {option.title}
              </li>
            )}
            sx={{ width: 300 }}
            freeSolo
            renderInput={(params) => (
              <TextField color='success' {...params} label="Search plant here" />
            )}
          />
          <FilterPlant />
        </Stack>

        {value && (
          <Card sx={{ width: '100%', borderRadius: '10px', maxWidth: 345 }}>
            <Box height={'50%'}>
              <Aloevera />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color='success' fontWeight={'bold'} mt={'20px'}>
                {value.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.desc}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
      <PlantList />
    </Stack>
  );
}

const plantsList = [
  { title: 'Aloe Vera', desc: 'Aloe vera is a succulent plant with thick, gel-filled leaves, known for its medicinal uses. It helps heal burns, soothes skin, and supports digestion.', val: 1 },
  { title: 'Basil', desc: 'Basil is known for its aromatic properties and use in culinary dishes. It also has medicinal benefits for digestion and inflammation.', val: 2 },
  { title: 'Neem', desc: 'Neem is widely known for its antibacterial and antifungal properties. It is used in skincare and as a natural pesticide.', val: 3 },
  { title: 'Ashwagandha', desc: 'Ashwagandha is a medicinal herb used for reducing stress, boosting energy levels, and improving concentration.', val: 4 },
  { title: 'Tulsi', desc: 'Tulsi, or Holy Basil, is revered for its medicinal properties. It supports respiratory health and strengthens immunity.', val: 5 },
  { title: 'Lavender', desc: 'Lavender is known for its calming aroma and is used to reduce anxiety, improve sleep, and soothe the skin.', val: 6 },
  { title: 'Peppermint', desc: 'Peppermint is used for its digestive benefits and its refreshing aroma. It is often used to relieve headaches and muscle pain.', val: 7 },
  { title: 'Rosemary', desc: 'Rosemary is an herb known for enhancing memory and concentration. It is also used in cooking for its flavorful aroma.', val: 8 },
  { title: 'Eucalyptus', desc: 'Eucalyptus leaves are used for their decongestant properties. They are often found in remedies for coughs and colds.', val: 9 },
  { title: 'Chamomile', desc: 'Chamomile is known for its calming effects and is often used in teas to promote relaxation and sleep.', val: 10 },
];

