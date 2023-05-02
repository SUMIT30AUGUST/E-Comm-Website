import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel'

import Countdown from 'react-countdown';

import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Component= styled(Box)`
       margin-top: 10px;
     background: white;
`

const Deal= styled(Box)`
       padding:15px 20px;

`



const Slide = ({ products }) => {
      const timeURL= " https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
    return (
        <Component>
            <Deal>
             <Typography>Deal of the Day</Typography>   
             <Box>
                <img src={timeURL} alt=""/>
                <Countdown date={Date.now()+5.04e+7}></Countdown>
                </Box> 
            </Deal>
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true} //ia also true by default
            centerMode={true} //to slide infinitely

            //Below props are to make Carousel smooth 
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                products.map((product, index) => (
                    //  console.log(product.url);
                    <img key={index} src={product.url} alt='product'></img>
                ))
            }

        </Carousel>
        </Component>
    )
}

export default Slide
