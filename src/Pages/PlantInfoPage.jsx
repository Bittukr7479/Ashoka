import React from 'react';
import { Box, Typography, Grid2, List, ListItem, ListItemIcon, ListItemText, Divider, Button, Stack, Paper, Card, useTheme, useMediaQuery } from '@mui/material';
import PlantModel1 from '../components/Plants3DModel/Plant1'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import {
  Favorite as HeartIcon,
  Psychology as BrainIcon,
  Shield as ShieldIcon,
  LocalHospital as BandageIcon,
  Restaurant as UtensilsIcon,
  Opacity as DropletIcon,
  ContentCut as HarvestIcon,
  Public as LocationIcon
} from '@mui/icons-material';
import FeedBack from '../components/PlantInfor/Feedback'
import PlantGoogleMap from '../components/PlnatInfo/PlantGoogleMap';
import Aloevera from './Landing3dPlant'
export default function AloeVeraInfo() {
  const diseasesRef = React.useRef(null);
  const usesRef = React.useRef(null);
  const cultivationRef = React.useRef(null);
  const harvestingRef = React.useRef(null);
  const locationRef = React.useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center', });
  };
  
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Box display={'flex'} sx={{backgroundColor:'#defff0', width:'100%'}}>
      <Stack spacing={1} width={isMobile?'28%':'15%'} mt={4} m={isMobile?'8px':'1.5rem'}>
        <Stack spacing={1} position={'fixed'} width={isMobile?'28%':'15%'}>

        <Typography variant='h5' fontWeight={'600'}>
          Contents:
        </Typography>
        <Button color='success' variant='outlined' onClick={() => handleScroll(diseasesRef)}>Diseases Cured</Button>
        <Button color='success' variant='outlined' onClick={() => handleScroll(usesRef)}>Uses</Button>
        <Button color='success' variant='outlined' onClick={() => handleScroll(cultivationRef)}>Cultivation Method</Button>
        <Button color='success' variant='outlined' onClick={() => handleScroll(harvestingRef)}>Harvesting Methods</Button>
        <Button color='success' variant='outlined' onClick={() => handleScroll(locationRef)}>Where to Find</Button>
        </Stack>
      </Stack>
      <Box sx={{ p: isMobile? 'unset' : 4 }} m={'auto'} width={isMobile?'62%':'75%'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Card sx={{ width: '20rem', height: '20rem', backgroundColor:'#849e93' }}>
            <Aloevera />
          </Card>
        </Box>
        {/* Heading */}
        <Typography variant={isMobile? "h4":"h3"} display={'flex'} alignItems={'center'} justifyContent={'center'} color='success' sx={{ fontWeight: 'bold', mb: 4 }}>
          Aloe Vera (Aloe barbadensis miller)
        </Typography>
        <Divider sx={{ my: 4 }} />


        {/* Diseases Cured Section */}
        <Typography color='green' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} display={'flex'} ref={diseasesRef}>
          <MedicalInformationIcon fontSize='large' /> &nbsp; Diseases Cured
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Burns and Wounds" secondary="Aloe vera gel soothes burns and promotes wound healing." />
              </ListItem>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Skin Conditions" secondary="Used to treat acne, eczema, and psoriasis due to its anti-inflammatory properties." />
              </ListItem>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Constipation" secondary="Aloe vera juice is known for its natural laxative effect." />
              </ListItem>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Ulcers and Digestive Issues" secondary="Helps soothe the stomach lining and reduce acid reflux." />
              </ListItem>
            </List>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Oral Health" secondary="Aloe vera is used in mouthwashes to reduce gum inflammation and plaque." />
              </ListItem>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Diabetes Management" secondary="Helps lower blood sugar levels in type 2 diabetes." />
              </ListItem>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Joint Pain" secondary="Used for its anti-inflammatory effects to relieve joint pain." />
              </ListItem>
              <ListItem>
                <ListItemIcon><BandageIcon /></ListItemIcon>
                <ListItemText primary="Immune System Support" secondary="Rich in antioxidants, aloe vera helps boost the immune system." />
              </ListItem>
            </List>
          </Grid2>
        </Grid2>

        <Divider sx={{ my: 4 }} />

        {/* Uses Section */}
        <Typography color='green' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={usesRef}>
          Uses
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><UtensilsIcon /></ListItemIcon>
            <ListItemText primary="Medicinal" secondary="Used in traditional and modern medicine for its skin healing and digestive benefits." />
          </ListItem>
          <ListItem>
            <ListItemIcon><UtensilsIcon /></ListItemIcon>
            <ListItemText primary="Cosmetics" secondary="Aloe vera gel is widely used in creams, lotions, shampoos, and other skin care products." />
          </ListItem>
          <ListItem>
            <ListItemIcon><UtensilsIcon /></ListItemIcon>
            <ListItemText primary="Health Supplements" secondary="Aloe vera juice is consumed to aid digestion and boost overall health." />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Cultivation Method Section */}
        <Typography color='green' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={cultivationRef}>
          Cultivation Method
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><ShieldIcon /></ListItemIcon>
            <ListItemText primary="Climate" secondary="Grows best in tropical and subtropical regions with full sunlight." />
          </ListItem>
          <ListItem>
            <ListItemIcon><ShieldIcon /></ListItemIcon>
            <ListItemText primary="Soil" secondary="Prefers well-drained, sandy soil with a pH of 6.0-7.0." />
          </ListItem>
          <ListItem>
            <ListItemIcon><ShieldIcon /></ListItemIcon>
            <ListItemText primary="Propagation" secondary="Aloe vera is commonly propagated from offsets or pups." />
          </ListItem>
          <ListItem>
            <ListItemIcon><ShieldIcon /></ListItemIcon>
            <ListItemText primary="Watering" secondary="Requires minimal watering; overwatering may cause root rot." />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Harvesting Method Section */}
        <Typography color='green' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={harvestingRef}>
          Harvesting Methods
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><HarvestIcon /></ListItemIcon>
            <ListItemText primary="Leaves" secondary="Harvest mature, outer leaves by cutting them close to the base." />
          </ListItem>
          <ListItem>
            <ListItemIcon><HarvestIcon /></ListItemIcon>
            <ListItemText primary="Gel Extraction" secondary="Extract gel by slicing open the leaf and scooping out the inner gel." />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Where to Find Section */}
        <Typography color='green' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={locationRef}>
          Where to Find
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><LocationIcon /></ListItemIcon>
            <ListItemText primary="Common Locations" secondary="Aloe vera is widely cultivated in home gardens, farms, and greenhouses." />
          </ListItem>
          <ListItem>
            <ListItemIcon><LocationIcon /></ListItemIcon>
            <ListItemText primary="Countries" secondary="Found in India, Mexico, USA, South Africa, and the Mediterranean region." />
          </ListItem>
          <ListItem>
            <ListItemIcon><LocationIcon /></ListItemIcon>
            <ListItemText primary="Regions" secondary="Prefers arid, tropical, and semi-tropical climates." />
          </ListItem>
        </List>
        <PlantGoogleMap/>
        <FeedBack/>
      </Box>
    </Box>
  );
}