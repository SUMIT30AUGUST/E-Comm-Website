
import { Box,Button ,styled} from "@mui/material"
import ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import FlashOnIcon  from '@mui/icons-material/FlashOn';

const LeftContainer = styled(Box)(({theme})=>({

  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]:{
     padding: '20px 40px'
  }
}))


const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0' ,
   width:'95%'
  })

const StyledButton= styled(Button)(({theme})=>({

  width: '48%',
  height: '50px',
  borderRadius: '2',
  [theme.breakpoints.down('lg')]:{
      width: '46%'
  }
}))


const ActionItem = (product) => {
  return (
     <LeftContainer>
         <Image src={product.product.url} alt="imggge"/>
        <StyledButton variant="contained" style={{ marginRight: 10 , background: '#ff9f00'}}><ShoppingCartIcon/>Add to Cart</StyledButton>
        <StyledButton variant="contained" style={{background:'#fb541b'}}><FlashOnIcon/>Buy now</StyledButton>
     </LeftContainer>
  )
}

export default ActionItem
