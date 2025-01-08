import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material"
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";


const DocuFooter = ({ prev, next, nextLink, prevLink }) => {

  const { mode } = useThemeContext()

  const backToTop = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth'
    })
  }

  const mobileView = useMediaQuery('(max-width:750px)');



    return (

<Box sx={{marginLeft: mobileView ? '0px' : '280px',p:5}}>
  <Divider/>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'10px'}}>
        {prev ? (
        <Box sx={{display:'block'}}>
        <Typography variant="subtitle2" sx={{ color: "grey" }}>
          Prev
        </Typography>
        <Box component={Link} to={prevLink} onClick={backToTop} sx={{display:'flex', alignItems:'center', color:'grey', cursor:'pointer', textDecoration:'none', "&:hover": { color: mode === 'light' ? 'black' : 'white'}}}>
          <IoMdArrowDropleft sx={{display:'flex', alignItems:'center'}} />
        <Typography variant="subtitle1"
        >
        {prev}
        </Typography>
        </Box>
        </Box>
        ) : (
          <>
          <Box></Box>
          </>
        )}
       

       {next ? (
        <Box sx={{display:'block'}}>
        <Typography variant="subtitle2" sx={{ color: "grey", textAlign:'right'}}>
          Next
        </Typography>
        <Typography
        onClick={backToTop}
        component={Link}
        to={nextLink}
        sx={{ display: "flex", alignItems: "center",color:'grey', cursor:'pointer', "&:hover": { color: mode === 'light' ? 'black' : 'white' }, textDecoration:'none'}} variant="subtitle1">
        {next}
        <IoMdArrowDropright
        sx={{
          marginLeft: 1, // Adds space between the text and the arrow
          fontSize: "20px", // Adjust the size of the icon as needed
        }}
        />
        </Typography>
        </Box>
        ) : (
          <>
          <Box></Box>
          </>
        )}


      </Box>
</Box>
        
    
    )
}

export default DocuFooter