import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { Box, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FunPlant from '../../Pages/LoremPage'
import Plant1 from '../Plants3DModel/Plant1'

export default function AccordionTransition() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const faqData = [
        {
            question: "What is the 3D Virtual Herbal Garden?",
            answer:
                "The 3D Virtual Herbal Garden is an interactive web-based experience where users can explore realistic 3D models of medicinal plants used in AYUSH systems. The platform provides detailed information about the plants' medicinal uses, cultivation methods, and other valuable data.",
        },
        {
            question: "What technologies are used to implement the 3D Virtual Herbal Garden on the website?",
            answer:
                "We are using technologies like WebGL, Three.js, and echoAR for rendering the 3D models. Backend and content management are powered by frameworks such as Node.js and MongoDB, while the front end is built using the MERN stack.",
        },
        {
            question: "Do I need a special plugin to view the 3D models?",
            answer:
                "No, you don’t need any special plugin. The website uses WebGL, which is supported by most modern browsers (Chrome, Firefox, Safari, etc.), allowing 3D models to be rendered directly on the browser.",
        },
        {
            question: "What is the 3D Virtual Herbal Garden?",
            answer:
                "The 3D Virtual Herbal Garden is an interactive web-based experience where users can explore realistic 3D models of medicinal plants used in AYUSH systems. The platform provides detailed information about the plants' medicinal uses, cultivation methods, and other valuable data.",
        },
        {
            question: "What technologies are used to implement the 3D Virtual Herbal Garden on the website?",
            answer:
                "We are using technologies like WebGL, Three.js, and echoAR for rendering the 3D models. Backend and content management are powered by frameworks such as Node.js and MongoDB, while the front end is built using the MERN stack.",
        },
        {
            question: "Do I need a special plugin to view the 3D models?",
            answer:
                "No, you don’t need any special plugin. The website uses WebGL, which is supported by most modern browsers (Chrome, Firefox, Safari, etc.), allowing 3D models to be rendered directly on the browser.",
        },
    ];

    return (
        <Box display={'flex'}>
            <Stack width={'-webkit-fill-available'} margin={'20px'} mb={'20px'} gap={'10px'} >
                <Typography display={'flex'} justifyContent={'center'} variant='h4' fontWeight={'600'} color='text.primary' margin={'20px 0px'}>
                    General FAQ
                </Typography>
                {faqData.map((faq, index) => (
                    <Accordion
                    style={{
                        borderRadius:'0px 20px'
                    }}
                        key={index}
                        expanded={expanded === index}
                        onChange={() => setExpanded(expanded === index ? false : index)}
                        slots={{ transition: Fade }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={[
                            {
                                borderRadius: '0px 20px',
                                backgroundColor: 'rgba(0, 211, 0, 0.2)',
                                '&:before': {
                                    display: 'none', // This removes the default outline in MUI Accordion
                                },
                            },
                            expanded === index
                            ? {
                                '& .MuiAccordion-region': {
                                    height: 'auto',
                                },
                                '& .MuiAccordionDetails-root': {
                                    display: 'block',
                                    backgroundColor:'#fff',
                                    color:'black', // Add border-radius here
                                        borderRadius: '0px 20px'
                                    },
                                }
                                : {
                                    '& .MuiAccordion-region': {
                                        height: 0,
                                    },
                                    '& .MuiAccordionDetails-root': {
                                        display: 'none',
                                    },
                                },
                        ]}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>

                ))}
            </Stack>
            {isMobile?<></>:
            <Box sx={{width:'50%'}} width={'100%'}  display={'flex'} justifyContent={'center'} mt={'70px'}>
                {/* <img src={plant} height={'100%'} /> */}
                <FunPlant/>
            </Box>}
        </Box>
    );
}
