import { Box, Typography } from "@mui/material"

const ImportComponent = ({ component }) => {


    return (

        <>

            <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Importing the component
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        To get started, simply import the component.
                    </Typography>
                    <Box
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop: '10px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`import { ${component} } from 'copykit-react'`}
                        </Typography>
                    </Box>
                </Box>
        
        </>
    )
}


export default ImportComponent