import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./CoreFeatures.css";
import img1 from '../../Assets/image/img1.jpg';
import img2 from '../../Assets/image/img2.jpg';
import img3 from '../../Assets/image/img3.jpg';
import { Box, Rating, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function App() {
    
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const sliderData = [
        {
            url: img1,
            review: {
                text: "Ashoka has truly redefined the way I explore natural remedies!....",
                reviewer: "Dr. Bittu Kumar",
                position: "Ayurvedic Research",
                rating: 4.5
            }
        },
        {
            url: img2,
            review: {
                text: "Innovative ideas and top-notch UI that will blow your mind.",
                reviewer: "Prof. Ankit Singh",
                position: "Head of Research, Virtual Herbs",
                rating: 5
            }
        },
        {
            url: img3,
            review: {
                text: "Revolutionizing the herbal medicine industry with modern technology.",
                reviewer: "Dr. Shalini Verma",
                position: "Senior Researcher, Herbal Science",
                rating: 4
            }
        },
        {
            url: img1,
            review: {
                text: "lorem ipsi  fri wr ihf rwd qwihd vfre ",
                reviewer: "Dr. Bittu Kumar",
                position: "Ayurvedic Research",
                rating: 4.5
            }
        },
        {
            url: img2,
            review: {
                text: "Innovative ideas and top-notch UI that will blow your mind.",
                reviewer: "Prof. Ankit Singh",
                position: "Head of Research, Virtual Herbs",
                rating: 5
            }
        },
        {
            url: img3,
            review: {
                text: "Revolutionizing the herbal medicine industry with modern technology.",
                reviewer: "Dr. Shivam Kumar",
                position: "Sexologist expert",
                rating: 4
            }
        }
    ];

    const [activeImageNum, setCurrent] = useState(0);
    const length = sliderData.length;

    const nextSlide = () => {
        setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
    };

    const prevSlide = () => {
        setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
    };

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return <p>No images to display</p>;
    }

    return (
        <>
        <Box sx={{ width: '-webkit-fill-available', height:isMobile? '16rem':'15rem'}} >
            <section className="image-slider">
                <div className="left">
                    <ArrowBackIosIcon onClick={prevSlide} sx={{color:'white', backgroundColor:'green',height:'40px', width:'40px', borderRadius:'50%', padding:'13px'}}/>
                </div>
                <div className="right">
                    <ArrowForwardIosIcon onClick={nextSlide} sx={{color:'white', backgroundColor:'green',height:'40px', width:'40px', borderRadius:'50%', padding:'13px'}}/>
                </div>
                {sliderData.map((currentSlide, ind) => (
                    <div
                        className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                        key={ind}
                    >
                        {ind === activeImageNum && (
                            <Stack spacing={0} width={isMobile ? '27vh': 'unset'} p={2} sx={{backgroundColor:'rgba(0, 211, 0, 0.2)', borderRadius:'10px'}}>
                                <Typography variant="h6">{currentSlide.review.text}</Typography>
                                <Typography color="greenish">{currentSlide.review.reviewer}</Typography>
                                <Typography color="greenish">{currentSlide.review.position}</Typography>
                                <Rating name="half-rating-read" value={currentSlide.review.rating} precision={0.5} readOnly />
                            </Stack>
                        )}
                    </div>
                ))}
            </section>
        </Box>
        </>
    );
}
