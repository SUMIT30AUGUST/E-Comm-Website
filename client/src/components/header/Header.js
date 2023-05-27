

import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Search from "./Search";
import Custombuttons from "./CustomButtons";



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
     margin: '0 % 0 auto',
     [theme.breakpoints.down('md')]:{
        display:'none'
     }
}));


const Header = () => {
    return (<>
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
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
                    <Custombuttons />
                </CustomButtonwrapper>
            </Toolbar>
        </StyledHeader>
    </>
    )
}

export default Header;