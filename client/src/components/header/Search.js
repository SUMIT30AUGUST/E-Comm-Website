

import { InputBase, Box,List,ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import { useState, useEffect } from "react";
import {getProducts} from '../../redux/actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';


const Searchcontainer = styled(Box)`
background: #fff;
width: 38%;
border-radius:2px;
margin-left:10px ;
display: flex;
`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width: 100%;
`
const Searchiconwrapper = styled(Box)`
color:blue;
padding: 4px;
display: flex;
`


const Search = () => {

    const [text,setText]= useState('');

    const {products} = useSelector(state=> state.getProducts);
    const dispatch=useDispatch();

    useEffect(()=>{
         dispatch(getProducts())
    },[dispatch])


    const getText= (text)=>{
        setText(text);
    }

    const ListWrapper= styled(List)`
     position: absolute;
     background:#FFFFFF;
     color: black;
     margin-top: 36px;
    `
    return (
        <Searchcontainer>
            <InputSearchBase
                placeholder="Search for Products,brands and more"
              onChange={(e)=>getText(e.target.value)}
              value={text}
            />

            <Searchiconwrapper>
                <SearchIcon />
            </Searchiconwrapper>
            {
                text && 
                   <ListWrapper>
                        {
                            products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                <ListItem>
                                  <Link 
                                    to={`/product/${product.id}`}
                                    onClick={()=>setText('')}
                                    style={{textDecoration:'none' , color:'inherit'}}
                                 >
                                    {product.title.longTitle}
                                  </Link>
                                    
                                </ListItem>
                            ))
                        }
                   </ListWrapper>
            }
        </Searchcontainer>
    )
}

export default Search;