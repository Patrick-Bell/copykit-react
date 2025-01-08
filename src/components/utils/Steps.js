import { Box, Typography } from "@mui/material"

const Steps = ({ stepOne, stepTwo, stepThree, component }) => {

    return (


        <>

<Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Linking text to the component
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        The component comes with a text prop which can be customised to your copy button. Here is how it works.
                    </Typography>

                    <Box>
                    <Typography sx={{marginTop:'20px', fontFamily:'Poppins', variant:'h6', fontWeight:500}}>Step 1</Typography>
                    <Typography variant='subtitle2' sx={{fontFamily:'Poppins', variant:'h6', color:'grey'}}>{stepOne}</Typography>
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
                            {`import { ${component} } from 'copykit-react'`}<br/>
                            {`import { TextField } from '@mui/material'`}<br />
                            {`import { useState } from 'react`}<br /><br />
                            {`const [text, setText] = useState('')`}
                        </Typography>
                    </Box>

                    <Typography sx={{marginTop:'20px', fontFamily:'Poppins', variant:'h6', fontWeight:500}}>Step 2</Typography>
                    <Typography variant='subtitle2' sx={{fontFamily:'Poppins', variant:'h6', color:'grey'}}>{stepTwo} </Typography>
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
                       <Box sx={{ fontFamily: 'monospace', fontSize: 'small' }}>
                        <Typography fontSize={'small'} fontFamily={'monospace'}>{`<TextField>`}</Typography>
                        <Typography fontSize={'small'} fontFamily={'monospace'} sx={{ paddingLeft: 2 }}>{`value={text}`}</Typography>
                        <Typography fontSize={'small'} fontFamily={'monospace'} sx={{ paddingLeft: 2 }}>{`onChange={(e) => setText(e.target.value)}`}</Typography>
                        <Typography fontSize={'small'} fontFamily={'monospace'}>{`</TextField>`}</Typography>
                        </Box>
                    </Box>

                    <Typography sx={{marginTop:'20px', fontFamily:'Poppins', variant:'h6', fontWeight:500}}>Step 3</Typography>
                    <Typography variant='subtitle2' sx={{fontFamily:'Poppins', variant:'h6', color:'grey'}}>{stepThree}</Typography>
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
                            {`<${component} text={text} />`}<br/>
                        </Typography>
                    </Box>
                </Box>
                </Box>
        
        
        </>
    )
}

export default Steps