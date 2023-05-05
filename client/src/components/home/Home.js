import { useEffect } from "react"

import NavBar from "./NavBar"
import Banner from "./Banner"
import Slide from "./Slide"
import { MidSlide } from "./MidSlide"

import {Box,styled} from '@mui/material'

import { getProducts } from "../../redux/actions/productAction"
import {useDispatch, useSelector} from 'react-redux'

const Component=styled(Box)`
padding:20px 30px;
background:#f2f2f2;
`

const Home=()=> {
  
  // useSelector is  a custom hook
  //  we get access to a state in useSelector
  // getProducts is a reducer here that is in the store.js file
   const {products}= useSelector(state => state.getProducts)
  console.log(products);
  const dispatch =useDispatch();

   useEffect(()=>{
         dispatch(getProducts())
    },[dispatch])

  return ( 
    <>
      <NavBar/>
    <Component>
      <Banner/>
      <MidSlide products={products} title="Deal of the Day" timer={true}/>
      <Slide products={products} title="Discounts for You" timer={false}/>
      <Slide products={products} title="Suggesting Items" timer={false} />
      <Slide products={products} title="Top Selecions" timer={false}/>
      <Slide products={products} title="Recommended Items" timer={false}/>
      <Slide products={products} title="Trending Offers" timer={false}/>
      <Slide products={products} title="Season's Offers" timer={false}/>
      <Slide products={products} title="Top Deals on Accessories" timer={false}/>
    </Component>
   </>
  )
}

export default Home;
