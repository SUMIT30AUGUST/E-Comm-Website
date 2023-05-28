import { useState } from "react";

import {List,ListItemButton, AppBar,Drawer, Toolbar, styled, Box, Typography, IconButton} from "@mui/material";
import { Link } from "react-router-dom";

import {Menu }from '@mui/icons-material';
import Search from "./Search";
import CustomButtons from "./CustomButtons";



const StyledHeader = styled(AppBar)`
background: black;
height: 55px;
`
const Component = styled(Link)`
margin-left: 11%;
line-height: 0;
text-decoration: none ;
color: inherit ;
`

const SubHeading = styled(Typography)`
   font-size:11px ;
   font-style: italic;
`


const CustomButtonwrapper = styled(Box)(({theme})=>({
     margin: '0 5% 0 auto',
     [theme.breakpoints.down('md')]:{
        display:'none'
     }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        color:'white'
    }
}));

const Header = () => {
   
    const [open,setOpen]=useState(false);
  
    const handleOpen=()=>{
         setOpen(true) 
    }
   
    const handleClose=()=>{
          setOpen(false)
    }

    const list = ()=>{
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItemButton>
                    <CustomButtons/>
                </ListItemButton>
            </List>
        </Box>
    };

    return (
    <>
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                
                <MenuButton onClick={handleOpen}>
                   <Menu/>
                </MenuButton>
                
                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>

                <Component to="/"> 
                    <Box style={{ display: 'flex' }}>
                        <Box style={{ fontSize:"38px", fontStyle:"italic",marginTop:"4px", fontWeight: 'bold' }}>Rawat's&nbsp;Store&nbsp;</Box>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{  fontSize:"12px", color: "#FFE500" }}>Here </Box>
                        </SubHeading>
                    </Box>
                </Component>
             
                <Search />
                <CustomButtonwrapper>
                    <CustomButtons />
                </CustomButtonwrapper>
            </Toolbar>
        </StyledHeader>
    </>
    )
}

export default Header;