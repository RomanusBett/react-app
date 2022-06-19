import React from "react";
import Carousel from "react-material-ui-carousel";
import {Box, Button, Typography, Container, ThemeProvider} from '@mui/material'
import { theme } from "./homebody";

function Item({ item }: { item: { description: string } }) {
  return (
      <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
      <Box sx={{
          height: 200,
      }}><Typography variant='h4'>{item.heading}</Typography>
      <Typography variant='h6' sx={{mb: 10}}>{item.description}</Typography></Box>
      </Container>
     </ThemeProvider>
     
  );
}

export default function Service() {
  const items = [
    {
        heading: "ALTERNATOR REPLACEMENT",
        description:"Get a Better Deal on Bulk Car Alternator Replacement. Find the Right Car Alternator Replacement Manufacturer near you."
        },
        {heading: "TOWING SERVICE",
         description:"  Moving? Car Failure? Worry no more! Haul your car to any destination from any location"
        },
        {heading: "ORDER PARTS",
         description:"Need parts, Order now from our site. We offer genuine parts at affordable rates"
        },
        {heading: "OTHER SERVICES",
         description:"Need other quick fixes? Send us a quick description of the problem and we will be right on it"
        }
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur: number, prev: number) => {
    setIndex(cur);
    console.log(cur, prev);
  };

  return (
    <Box sx={{}}>
      <Carousel
        index={index}
        onChange={handleChange}
        interval={5000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        className="my-carousel"
        sx={{mb:20}}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {items.map((item, i) => (
        <Button
          size='small'
          sx={{
              pt:0,
          }}
          onClick={() => setIndex(i)}
          style={{ background: i === index ? "#ccc" : "#cfd8dc" }}
        >
          {i}
        </Button>
      ))}
    </Box>
  );
}




   
           