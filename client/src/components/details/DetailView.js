import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";


import ActionItem from "./ActionItem";
import { useParams } from "react-router-dom";


import { getProductDetails } from "../../redux/actions/productAction";

import {Box, Typography,Grid,styled} from '@mui/material'

const Component =styled(Box)`
   background: #f2f2f2 ;
   margin-top:55px ;
`


const Container = styled(Grid)`
    background: #ffffff;
    display: flex;
`
const RightContainer = styled(Grid)`
   margin-top: 50px;
   padding-left: 45px;
`

const DetailView = () => {
  
   const dispatch =useDispatch();
   const {id}=useParams();

  const {loading , product} = useSelector(state=> state.getProductDetails)

 useEffect(()=>{
  if(product && id !==product.id)
      dispatch(getProductDetails(id))
 },[dispatch,id,loading,product])
 



  return (
    <div>
      <Component>
            {
                  product && Object.keys(product).length &&
                  <Container container>
                      <Grid item lg={4} md={4} sm={8} xs={12}>
                          <ActionItem product={product}/>                       
                       </Grid>
                      
                      <RightContainer  item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{margin: 5, color:'#878787'}}>8 Ratings & 1 Review </Typography>
                        <Typography>
                          <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;
                          <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;  
                          <Box component="span" style={{color:'dark-green'}}>{product.price.discount} off</Box>  
                        </Typography>
                      </RightContainer>
                  </Container>
            }
      </Component>
    </div>
  )
}

export default DetailView;