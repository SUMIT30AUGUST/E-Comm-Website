import {Box,Typography,Menu,MenuItem,styled} from '@mui/material'
import { useState } from 'react';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
 margin-top:5px;
`

const Profile=({account})=>{
    
    const [open,setOpen]= useState(false);
    
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <>
       
       <Box onClick={handleClick}>
        <Typography style={{marginTop:2}}>{account}</Typography>
        </Box> 
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}></MenuItem>
            <PowerSettingsNewIcon color="primary" fontsize='small'/> 
            <Typography>Logout</Typography>
        </Component>
        </>
    )
}

export default Profile;