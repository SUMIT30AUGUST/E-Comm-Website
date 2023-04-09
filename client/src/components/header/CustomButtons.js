import { Box,Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState,useContext } from "react";

import { DataContext } from "../../context/DataProvider";

//components
import LoginDialog from "../login/LoginDialog";

const Wrapper=styled(Box)`
display: flex;
margin: 0 3% 0;
& > button, &>p, & > div{
    margin-right:40px ;
    font-size:14px;
    align-items:center;
}
`

const Container=styled(Box)`
display:flex;
`

const LoginButton=styled(Button)`
color: #2874F0;
background: #fff;
text-transform:none;
padding:5px 40px;
`


const Custombuttons=()=>{
   
    const [open,setOpen] = useState(false);
   
    const {account} = useContext(DataContext);

const openDialog=()=>{
    setOpen(true);
}

    return(
        
        <Wrapper>
            {
                account? <Typography>{account}</Typography>
                :
                <LoginButton variant="contained" onClick={()=> openDialog()}> login</LoginButton>
            }
        
          <Typography style={{width:135,marginTop:3}}>Become a Seller</Typography>
          <Typography style={{marginTop:3}}>More</Typography>
         <Container>
            <ShoppingCartIcon/>
         <Typography>Cart</Typography>
         </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>

    )
}

export default Custombuttons;