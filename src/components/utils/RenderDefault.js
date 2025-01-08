import { Box, Typography } from "@mui/material"
import TextButton from "../TextCopy"

const RenderDefault = ({ component }) => {


    return (

        <>
        
        <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Using the component
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        Renders the default version.
                    </Typography>
                    <Box sx={{ marginTop: '10px' }}>
                        {component}
                    </Box>
                </Box>
        
        </>
    )
}

export default RenderDefault