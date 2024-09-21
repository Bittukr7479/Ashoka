import React, { useState, useRef } from 'react';
import './LandingPage.css';
import img1 from '../Assets/image/img1.jpg';
import img2 from '../Assets/image/img2.jpg';
import img3 from '../Assets/image/img3.jpg';
import img4 from '../Assets/image/img4.jpg';
import LoremPage from './LoremPage';
import { Box } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
function LandingPage() {
  // State for slider items
  const [sliderItems, setSliderItems] = useState([img1, img2, img3, img4]);
  const [thumbnailItems, setThumbnailItems] = useState([img1, img2, img3, img4]);

  // Refs for slider and thumbnail
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  // Function to move the slider
  const moveSlider = (direction) => {
    if (direction === 'next') {
      // Move the first item to the end of the array
      setSliderItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      setThumbnailItems((prevThumbnails) => [...prevThumbnails.slice(1), prevThumbnails[0]]);
    } else {
      // Move the last item to the start of the array
      setSliderItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
      setThumbnailItems((prevThumbnails) => [prevThumbnails[prevThumbnails.length - 1], ...prevThumbnails.slice(0, -1)]);
    }

    // Add and remove animation class
    sliderRef.current.classList.add(direction);
    sliderRef.current.addEventListener('animationend', () => {
      sliderRef.current.classList.remove(direction);
    }, { once: true });
  };

  return (
    <div style={{marginTop:'50px'}}>
      <div className="slider" ref={sliderRef}>
        <div className="list">
          {sliderItems.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
              <div className="content">
                {/* <div className="title">MAGIC SLIDER</div>
                <div className="type">TYPE {index + 1}</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail" ref={thumbnailRef}>
          {thumbnailItems.map((img, index) => (
            // <Button width="220px">
            <div className="item" key={index}>
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
            // </Button>
          ))}
        </div>
        <Box style={{zIndex:'220', position:'fixed', width:'inherit', display:'flex', justifyContent:'flex-end'}}>
          <LoremPage/>
        </Box>
        <div className="nextPrevArrows">
          <button className="prev" onClick={() => moveSlider('prev')}>‹</button>
          <button className="next" onClick={() => moveSlider('next')}>›</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
