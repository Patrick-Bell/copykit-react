import { Box, Typography, useMediaQuery } from "@mui/material"
import { IoMdCheckmark } from "react-icons/io";
import { IoTerminalOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "./Drawer";
import DocuFooter from './DocuFooter'


const InstallPage = () => {

    const [icon, setIcon] = useState(<FiCopy />)
    const mobileView = useMediaQuery('(max-width:750px)');



    const handleCopy = () => {
        navigator.clipboard.writeText('npm i copykit-react')
        setIcon(<IoMdCheckmark />)

        setTimeout(() => {
            setIcon(<FiCopy />)
        }, 3000);
    }

    return (

        <>
    <Sidebar/>
         {/* Main Content Area */}    
         <Box sx={{ marginLeft: mobileView ? '0' : '280px', padding: 5 }}>

<Box sx={{marginTop:'10px'}}>
<Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
    Get Started
</Typography>
<Typography variant="subtitle2" sx={{ color: 'grey', marginTop:'10px' }}>
    CopyKit is a robust React component designed for seamless clipboard copying functionality. Built with Material UI for a clean, responsive design, CopyKit is highly customizable, allowing you to easily adjust colors and incorporate features like snackbars and tooltips to enhance the user experience of your copy-to-clipboard buttons.
</Typography>
</Box>

<Box sx={{marginTop:'50px'}}>
<Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
    Installation
</Typography>
<Typography variant="subtitle2" sx={{ color: 'grey', marginTop:'10px' }}>
    Simply npm install the package in your project using the terminal.
</Typography>
</Box>


<Box
        sx={{
            marginTop:'10px',
            border: "1px solid #e0e0e0", // Light grey border for subtle separation
            borderRadius: 1, // Rounded corners for a modern look
            overflow: "hidden", // Ensures the content doesn't overflow
            maxWidth: 500, // Limiting the width for a more compact design
        }}
    >
        {/* Header Section */}
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #e0e0e0", // Subtle bottom border
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IoTerminalOutline
                    sx={{
                        fontSize: "20px", // Icon size
                        marginRight: 1, // Space between the icon and text
                    }}
                />
                <Typography
                fontSize='small'
                    sx={{
                        fontWeight: "bold",
                        marginLeft:'10px'
                    }}
                >
                    Terminal
                </Typography>
            </Box>
            <Box
            onClick={handleCopy}
                    sx={{
                        fontSize: "16px", // Icon size
                        marginRight: 1, // Space between the icon and text
                        cursor:'pointer'
                    }}
                >{icon}</Box>
        </Box>

        {/* Command Section */}
        <Box sx={{ padding: "10px" }}>
            <Typography
            onClick={handleCopy}
            fontSize='small'
                sx={{
                    fontFamily: "monospace", // Monospaced font for command
                }}
            >
                npm i copykit-react
            </Typography>
        </Box>

    </Box>

</Box>

<DocuFooter next={'TextCopy Button'} nextLink={'/text-button'} prev={'Home'} prevLink={'/'} />

        
        </>
    )
}


export default InstallPage