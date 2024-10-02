import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import PlantMapLogo from '../../Assets/PlantMapLogo.png'; // Correctly importing the image file
import { Box, Typography } from "@mui/material";

const markers = [
  {
    id: 1,
    name: "Champapur Pond",
    position: { lat: 25.46942555511041, lng: 85.50397808399906 },
  },
  {
    id: 2,
    name: "Daal kuaa Ranisaray",
    position: { lat: 25.457378389093492, lng: 85.54884996496821 },
  },
  {
    id: 3,
    name: "GREEN EYES GARDEN",
    position: { lat: 25.391592381959665, lng: 85.49161474402102 },
  }
];

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.Google_Map_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <Box>
        <Typography variant="h4" fontWeight={'bold'} color="success" mb={2}>Locate an Aloe Vera plant near you</Typography>
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 25.460764745967584, lng: 85.51306186930849 }}
              zoom={10}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "90%", height: "80vh" }}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  icon={{
                    url: PlantMapLogo, // Using the correct image URL
                    scaledSize: new window.google.maps.Size(50, 50), // Correcting the scaled size
                  }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <Box>
                        <Typography color="gray">{name}</Typography>
                      </Box>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
      </Box>
    </Fragment>
  );
}

export default App;
