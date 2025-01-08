import '../../../src/App.css'
import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ContactModal from './ContactModal';
import Header from './Header';
import Hero from './Hero';



const HomePage = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)


    const handleNavigation = () => {
        navigate('/installation')
    }

    const handleClose = () => {
        setOpen(false);
      };

    return (

        <>
        <Box sx={{borderBottom:'1px solid lightgrey', padding:'10px'}}>
            <Header setOpen={setOpen} />
        </Box>

       <Hero handleNavigation={handleNavigation} />

        <ContactModal open={open} handleClose={handleClose} />

        
        </>
    )
}

export default HomePage