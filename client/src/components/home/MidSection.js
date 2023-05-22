import { imageURL } from "../../constants/Data";
import {Grid,styled} from '@mui/material'


const Wrapper= styled(Grid)`
margin-top:20px;
justify-content: space-between;
` 

const MidSection=()=>{
    return(
      <>
   <Wrapper lg={12} sm={12} md={12} xs={12} container>
          {
            imageURL.map((image,index)=>{
              return  <Grid item key={index}  lg={4} md={4} sm={12} xs={12} >
                         <img  src={image} alt="Imagee" style={{width:"100%"}}/>
                      </Grid>
            })
          }
    </Wrapper>
         
    </>
    )
}

export default MidSection;