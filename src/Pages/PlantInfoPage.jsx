import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Typography, Paper, Box, Button, Divider } from '@mui/material';
import img from '../Assets/ExploreImg/img_1.jpg';

const ContentSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const TulsiInfo = () => {
  // Refs for each section
  const benefitsRef = React.useRef(null);
  const usesRef = React.useRef(null);
  const cultivationRef = React.useRef(null);
  const harvestingRef = React.useRef(null);

  // Function to handle smooth scrolling to a section
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ backgroundColor: '#E8F5E9', display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={4} sx={{ padding: '2rem', maxWidth: '1000px' }}>
        <Stack flexDirection={'row'} gap={'30px'}>
          <Box>
            {/* Image Section */}
            <img src={img} alt="tulsi plant" style={{ width: '300px', height: '300px', borderRadius: '10px' }} />
          </Box>
          <Stack justifyContent={'flex-start'} sx={{ height: '300px' }}>
            <Stack mb={2}>
              <Typography variant="h4" gutterBottom sx={{ textDecoration: 'underline' }} color='#2E7D32' fontWeight={'bold'}>
                Tulsi (Holy Basil)
              </Typography>
              <Typography variant="h5">
                <strong>Botany name:</strong> Ocimum tenuiflorum
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur
              </Typography>
            </Stack>

            {/* Buttons for Navigation */}
            <Box display={'flex'} flexDirection={'column'} width={'fit-content'} gap={'10px'}>
              <Button variant='outlined' onClick={() => handleScroll(benefitsRef)}>
                Benefits
              </Button>
              <Button variant='outlined' onClick={() => handleScroll(usesRef)}>
                Uses
              </Button>
              <Button variant='outlined' onClick={() => handleScroll(cultivationRef)}>
                Cultivation Method
              </Button>
              <Button variant='outlined' onClick={() => handleScroll(harvestingRef)}>
                Harvesting Method
              </Button>
            </Box>
          </Stack>
        </Stack>

        {/* Benefits Section */}
        <ContentSection ref={benefitsRef} sx={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" gutterBottom textAlign={'center'} color='#2E7D32'>
            Benefits
          </Typography>
          <Divider />
          <Typography variant="body1">
            <strong>Diseases cure:</strong>
            <ul>
              <li><strong>Heart health:</strong> Tulsi contains antioxidants and vitamin C, which may protect the heart from free radicals.</li>
              <li><strong>Metabolic health:</strong> Tulsi may help lower blood sugar, improve cholesterol, and decrease inflammation.</li>
              <li><strong>Mental health:</strong> Tulsi may help reduce stress, anxiety, and depression, and improve memory and cognitive function.</li>
              <li><strong>Immunity:</strong> Tulsi may increase the immune response and inhibit spike proteins found in the SARS-CoV-2 virus.</li>
              <li><strong>Oral health:</strong> Tulsi's antibacterial properties may help fight bad breath, reduce plaque buildup, and maintain healthy teeth and gums.</li>
              <li><strong>Wound healing:</strong> Tulsi may help wounds heal faster and increase their breaking strength.</li>
              <li><strong>Other health benefits:</strong> Tulsi may also help with headaches, fevers, acne, kidney stones, digestion, and insect bites.</li>
            </ul>
          </Typography>
        </ContentSection>

        {/* Uses Section */}
        <ContentSection ref={usesRef} sx={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" gutterBottom textAlign={'center'} color='#2E7D32'>
            Uses
          </Typography>
          <Divider />
          <Typography variant="body1">
            <ul>
              <li><strong>Health:</strong> Tulsi can help with a variety of health issues, including colds and coughs, anti-inflammatory, antioxidant properties, stress reduction, digestion improvement, and boosting the immune system.</li>
              <li><strong>Culinary:</strong> Tulsi leaves can be used to flavor tea and as a spice in Thai dishes.</li>
              <li><strong>Insect repellent:</strong> Dried tulsi leaves can be mixed with stored grains to repel insects.</li>
            </ul>
          </Typography>
        </ContentSection>

        {/* Cultivation Method Section */}
        <ContentSection ref={cultivationRef} sx={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" gutterBottom textAlign={'center'} color='#2E7D32'>
            Cultivation Method
          </Typography>
          <Divider />
          <Typography variant="body1">
            <ul>
              <li><strong>Prepare the nursery:</strong> Prepare seed bags that are 15 inches by 4'9" and add farm yard manure.</li>
              <li><strong>Sow the seeds:</strong> Mix the seeds with sand in a 1:5 ratio and sow them 2 cm deep.</li>
              <li><strong>Water:</strong> Water the seeds with a sprinkler hose two days after sowing.</li>
              <li><strong>Thin:</strong> When the seedlings have 4-5 leaves, they are ready to be transplanted into the field.</li>
              <li><strong>Fertilize:</strong> Spray the seedlings with a 2% urea solution 15-20 days before transplanting to help them grow healthy.</li>
              <li><strong>Transplant:</strong> Transplant the seedlings in the middle of April when they are 6 weeks old.</li>
              <li><strong>Water before transplanting:</strong> Water the seedling beds 24 hours before transplanting so the seedlings can be easily uprooted.</li>
              <li><strong>Soil:</strong> Tulsi grows best in well-drained soil with good organic matter and a pH of 5.0 to 7.5. Avoid growing it in highly saline, alkaline, or waterlogged conditions.</li>
            </ul>
          </Typography>
        </ContentSection>

        {/* Harvesting Method Section */}
        <ContentSection ref={harvestingRef} sx={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <Typography variant="h4" gutterBottom textAlign={'center'} color='#2E7D32'>
            Harvesting Method
          </Typography>
          <Divider />
          <Typography variant="body1">
            <ul>
              <li><strong>When to harvest:</strong> Tulsi is typically harvested at full bloom, which is usually 90–95 days after planting. After the first harvest, you can harvest the plant every 65–75 days.</li>
              <li><strong>How to harvest:</strong> Cut the plant 15–20 cm above the ground. You can harvest a few leaves and flowers at a time, even when the plant is young.</li>
              <li><strong>When to harvest for oil:</strong> Harvest on a bright, sunny day to get the best oil yield. Avoid harvesting after it rains.</li>
              <li><strong>After harvesting:</strong> You can let the harvested tulsi wilt in the field for 4–5 hours to reduce moisture and bulk.</li>
              <li><strong>Harvesting tips:</strong> Harvesting the growing tips encourages bushier growth.</li>
              <li><strong>When to harvest seeds:</strong> Tulsi seeds are ready when the pods turn brownish and tiny black seeds start to appear.</li>
            </ul>
          </Typography>
        </ContentSection>
      </Stack>
    </Box>
  );
};

export default TulsiInfo;
