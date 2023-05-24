import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
//useSelector is used for getting values from the redux

import ActionItem from "./ActionItem";
import { useParams } from "react-router-dom";
//useParams is a custom hook of react router dom
// it is used to take out values from the URL
//useParams is an object.

import { getProductDetails } from "../../redux/actions/productAction";

import {Box, Typography} from '@mui/material'

const DetailView = () => {
  
   const dispatch =useDispatch();
   const {id}=useParams();

  const {loading , product} = useSelector(state=> state.getProductDetails)

 useEffect(()=>{
  if(product && id !==product.id)
      dispatch(getProductDetails(id))
 },[dispatch,id,loading,product])
 
 console.log(product);


  return (
    <div>
      <Box>
            {
                  product && Object.keys(product).length &&
                  <Box>
                      <Box>
                          <ActionItem product={product}/>
                      </Box>
                      <Box>
                        <Typography>{product.title.longTitle}</Typography>
                      </Box>
                  </Box>
            }
      </Box>
    </div>
  )
}

export default DetailView;