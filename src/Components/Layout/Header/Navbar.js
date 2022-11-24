import React from 'react'
import {Box,Badge,IconButton} from '@mui/material'
import {MenuOutlined, PersonOutline, SearchOutlined, ShoppingBagOutlined} from '@mui/icons-material'
 import { useNavigate } from 'react-router-dom'
 import {useDispatch ,useSelector} from 'react-redux'
import {shades} from '../../../theme'
const Navbar = () => {
    //rbga(255,255,255,0.95)
    const navigate = useNavigate()

  return (
    <>
    <Box display={"flex"} alignItems="center" width="100%" height="60px" position="fixed" color="black" top="0" left="0" backgroundColor="rgb(238,238,238)">
     <Box width="80%" justifyContent="space-between" zIndex="1" margin="auto" display="flex">
        
        <Box onClick={()=>navigate('/')} sx={{"&:hover":{cursor:"pointer"}}} color={shades.primary[500]}>LOGO  </Box>
        <Box display={"flex"} justifyContent="space-between"columnGap="20px" zIndex="2">     <IconButton sx={{color:"black"}}><SearchOutlined/></IconButton>
        <IconButton sx={{color:"black"}}><PersonOutline/></IconButton>
        <IconButton sx={{color:"black"}}><MenuOutlined/></IconButton>
        <IconButton sx={{color:"black"}}><ShoppingBagOutlined/></IconButton>

</Box>
    

        </Box>   
        </Box></>
  )
}

export default Navbar