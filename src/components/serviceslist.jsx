import React from "react";
import Carousel from "react-material-ui-carousel";
import {Box, Button, Typography, Container, createTheme, ThemeProvider} from '@mui/material'


const theme= createTheme({
  palette: {
      background:{
          paper: 'fff',
          light: '#ffac33',
          main: '#007bb2',
          dark: '#03002E',
          contrastText: '#cfd8dc',
      },
      text: {
          primary: '#173A5E',
          secondary: '#46505A',
          light: '#ffac33',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#fff',
      }        
  },
  typography:{
      fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'
  },
});
function Item({ item }: { item: { description: string } }) {
  return (
      <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
      <Box sx={{
          height: 200
      }}><Typography variant='h4'>{item.heading}</Typography>
      <Typography variant='h6' sx={{mb: 10}}>{item.description}</Typography></Box>
      </Container>
     </ThemeProvider>
     
  );
}

export default function Service() {
  const items = [
    {
        heading: "Alternator replacement",
        description:"Get a Better Deal on Bulk Car Alternator Replacement. Find the Right Car Alternator Replacement Manufacturer near you."
        },
        {heading: "battery replacement",
         description:"Chloride and Exide Car Battery Replacement Services. Car battery replacement service near you. Book our car battery replacement service at your doorstep."
        },
        {heading: "leaking raditor replacement",
         description:"We do Complete Assembly, Re-coring, Re-conditioning, Repair & Sevicing of both metallic and plastic radiators. Repair, Service and maintainance majorly entails routine checkup and replacement"
        },
        {heading: "Towing service and instant diagnosis",
         description:"We provide towing services in Kenya, 24 hours, 7 days a week tow truck services in Nairobi and all the surrounding counties"
        },
        {heading: "Brake pad change",
         description:"Visit Zuzu Lube for brake maintenance services, brake repair, and/or pad replacement We'll show Zuzu Lube locations closest to you"
        },
        {heading: "car not starting",
         description:"If your vehicle won't start, it's usually caused by a dying or dead battery, loose or corroded connection cables, a bad alternator or an issue with the starter. we replace and fix all issues associated"
        },
        {heading: "Oil Filter and oil change",
         description:"Zuzu Kenya provides oil services for cars, this includes; replacement of engine oil and oil filter. visit us today for a quick fix"
        },
        {heading: "Fuel pump change and fixation",
         description:"Get your car's fuel pump replaced at the convenience of your location. At Zuzu we provide quality parts & services."
        }
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur: number, prev: number) => {
    setIndex(cur);
    console.log(cur, prev);
  };

  return (
    <div>
      <Carousel
        index={index}
        onChange={handleChange}
        interval={5000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        className="my-carousel"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {items.map((item, i) => (
        <Button
          size='small'
          sx={{
              mt: 6,
              pt:0,
          }}
          onClick={() => setIndex(i)}
          style={{ background: i === index ? "#ccc" : "#cfd8dc" }}
        >
          {i}
        </Button>
      ))}
    </div>
  );
}




   
           