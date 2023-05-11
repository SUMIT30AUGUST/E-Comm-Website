import { Box } from "@mui/material";
import { imageURL } from "../../constants/Data";





const MidSection=()=>{
    return(
   <Box>
          {
            imageURL.map((image)=>{
               return <img src={image} alt="Image" style={{width:"100%"}}/>
            })
          }
    </Box>
    )
}

export default MidSection;