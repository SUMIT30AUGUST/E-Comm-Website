import { Typography,Box,styled, TableBody,Table, TableRow, TableCell} from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText=styled(Box)`
  font-size:14px;
  vertical-align:baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`

const StyledBadge= styled(LocalOfferIcon)`
   margin-right : 10px;
   color:green;
   font-size: 15px;
`

const ColumnText= styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
& > td {
    font-size: 14px;
    margin-top: 10px ;
}
`

const ProductDetail=({product})=>{

    const date= new Date(new Date().getTime()+(5*24*60*60*1000))
  return(
  <>
  <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{margin: 5, color:'#878787'}}>8 Ratings & 1 Review </Typography>
                        <Typography>
                          <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;
                          <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;  
                          <Box component="span" style={{color:'dark-green'}}>{product.price.discount} off</Box>  
                        </Typography>
                        <br/>
                        <Typography>Available Offers</Typography>
                        <SmallText>
                            <Typography><StyledBadge/>Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
                            <Typography><StyledBadge/>Get extra 13% off (price inclusive of discount) T&C</Typography>
                          
                        </SmallText>
                        <Table>
                            <TableBody>
                                <ColumnText>
                                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹49 </TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                                    <TableCell >No Warranty</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                                    <TableCell >
                                        <Box component="span" style={{color:'blue'}}>
                                        Sumit Rawat
                                        </Box>
                                        <Typography>GST invoice available</Typography>
                                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                                    </TableCell>
                                </ColumnText>

                                <ColumnText>
                                <TableCell style={{color:'#878787'}}>Description</TableCell>
                                 <TableCell>{product.description}</TableCell>
                                </ColumnText>
                            </TableBody>
                        </Table>
  </>
  )

}

export default ProductDetail;