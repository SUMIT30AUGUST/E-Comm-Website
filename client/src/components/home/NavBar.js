
//components

import { Box ,Typography,styled} from "@mui/material";
import { navData } from "../../constants/Data";



const Component=styled(Box)(({theme})=>({
  overflow:'overlay hidden',
  display: 'flex',
  margin:'55px 130px 0px 130px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]:{
    margin:0,
  }
}))

const Container=styled(Box)`
   padding : 12px 8px;
  text-align:center;
`

const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const NavBar=()=>{
    return(
        <Component>
          {
            navData.map((data,index)=>(
                <Container key={index}>
                    <img src={data.url} alt="nav"/>
                    <Text>{data.text}</Text>
                </Container>
            ))
          }
        </Component>
    )
}

export default NavBar;