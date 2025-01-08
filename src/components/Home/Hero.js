import { Box, Typography, IconButton, Button } from "@mui/material"
import { BsShift } from "react-icons/bs";
import { CiPaperplane } from "react-icons/ci";

const Hero = ({ handleNavigation }) => {

    return (

        <Box sx={{top:'50%', left:'50%', transform:'translate(-50%, -50%)', position:'absolute'}}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',}}>
            <IconButton disabled sx={{color: 'black', border: `1px solid lightgrey`, borderRadius:'10px', display:'flex', alignItems:'center', margin:'0 10px', width:'150px', height:'75px'}}>
                <BsShift />
            </IconButton>
            <IconButton disabled sx={{color: 'black', border: `1px solid lightgrey`, borderRadius:'10px', display:'flex', alignItems:'center', width:'150px', height:'75px'}}>
                C
            </IconButton>
            </Box>
            <Typography variant='h2' sx={{fontFamily: 'Poppins', fontWeight:800, textAlign:'center', marginTop:'10px'}}>EFFORTLESS COPY TO CLIPBOARD</Typography>
            <Typography variant='subtitle1' sx={{fontFamily:'Poppins', color:'grey', textAlign:'center', marginTop:'10px'}}>A simple react package that utilises Material UI to effortlessly generate basic copy buttons that allow you to copy text to your clipboard.</Typography>
            <Box sx={{display:'flex', alignContent:'center', justifyContent:'center', marginTop:'10px'}}>
                <Button onClick={handleNavigation} sx={{background:'white', border:'1px solid black', color:'black'}} endIcon={<CiPaperplane />} variant='contained'>Get Started</Button>
            </Box>
        </Box>


    )
}

export default Hero