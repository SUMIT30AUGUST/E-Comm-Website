import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel'

import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';

import { Box, Typography ,Button,Divider,styled} from '@mui/material';


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


const Component = styled(Box)`
       margin-top: 10px;
     background: white;
`

const Deal = styled(Box)`
       padding:15px 20px;
       display: flex;
`
const Timer = styled(Box)`
       display: flex;
       margin-left: 10px;
       align-items: center;
       color: #7f7f7f;
`

const DealText = styled(Typography)`
     font-size: 22px;
     font-weight: 550;
    
`

const ViewAllButton=styled(Button)`
   margin-left: auto ;
    background-color:#2874f0 ;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`

const Image = styled('img')({
    width: 'auto',
    height:150 
})

const Text= styled(Typography)`
  font-size: 14px;
  margin-top: 5px ;
`

const Slide = ({ products,title,timer}) => {
    const timeURL = " https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

    const render = ({ hours, minutes, seconds },index) => {
        return <Box  variant="span">{hours} : {minutes} : {seconds} Left</Box>
    }
    return (
        <Component>
            <Deal>
                <DealText >{title}</DealText>
                 {
                    timer && 

                     <Timer>
                           <img style={{ width: 24 }} src={timeURL} alt="" />
                        <Countdown date={Date.now() + 5.04e+7} renderer={render}></Countdown>
                     </Timer>
                 }
                <ViewAllButton variant='contained' color='primary'>View All</ViewAllButton>
            </Deal>
            {/*  used for drawing the line */}
            <Divider/>  
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
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                       <Box key={index} textAlign="center" style={{padding: "25px 15px"}}>
                        <Image  src={product.url} alt='product'></Image>
                        <Text style={{fontWeight:870,color: '#212121'}}>{product.title.shortTitle}</Text>
                        <Text style={{color:'green'}}>{product.discount}</Text>
                        <Text style={{color:'black',opacity :'.6' }}>{product.tagline}</Text>
                        </Box>
                    </Link>
                ))
            }

            </Carousel>
        </Component>
    )
}

export default Slide
