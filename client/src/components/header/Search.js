

import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
// import Custombuttons from "./CustomButtons";


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
    return (
        <Searchcontainer>
            <InputSearchBase
                placeholder="Search for Products,brands and more"
            />
            <Searchiconwrapper>
                <SearchIcon />
            </Searchiconwrapper>
        </Searchcontainer>
    )
}

export default Search;