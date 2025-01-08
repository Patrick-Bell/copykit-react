import { Box, IconButton, Typography, Snackbar, TextField, InputAdornment, useMediaQuery } from "@mui/material"
import Sidebar from "./Drawer"
import EmphasisText from "../utils/EmphasisText"
import { IoTerminalOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";
import TextButton from "../TextCopy";
import DocuFooter from "./DocuFooter";
import { IoMdCheckmark } from "react-icons/io";
import ContactModal from "../Home/ContactModal";
import SmallIcon from '../IconCopy'
import { Height } from "@mui/icons-material";




const Examples = () => {

    const [iconOne, setIconOne] = useState(<FiCopy />)
    const [iconTwo, setIconTwo] = useState(<FiCopy />)
    const [anchorIcon, setAnchorIcon] = useState(<FiCopy />)
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)
    const [openFeedback, setOpenFeedback] = useState(false)
    const mobileView = useMediaQuery('(max-width:750px)');
    const smallView = useMediaQuery('(max-width:1000px)')
    const [hovering, setHovering] = useState(false)
    const [fadeHover, setFadeHover] = useState(false)
    const [expandHover, setExpandHover] = useState(false)


    const handleAnchorCopy = () => {
        navigator.clipboard.writeText(`<IconCopy component='a' href='/endpoint' customStyling={{borderRadius:'10px'}} />`)
        setAnchorIcon(<FiCheck />)
        setOpen(true)

        setTimeout(() => {
            setAnchorIcon(<FiCopy />)
            setOpen(false)
        }, 3000);
    }

    const handleCopyExampleOne = () => {
        navigator.clipboard.writeText(`<TextButton btnBackground="black" btnColor="white" showSnackbar endIcon={<FiCopy />} />`)
        setIconOne(<IoMdCheckmark />)

        setTimeout(() => {
            setIconOne(<FiCopy />)
        }, 3000);
    }

    const handleCopyExampleTwo = () => {
        navigator.clipboard.writeText(`<IconCopy component='a' href='/endpoint' customStyling={{borderRadius:'10px'}} />`)
        setIconTwo(<IoMdCheckmark />)

        setTimeout(() => {
            setIconTwo(<FiCopy />)
        }, 3000);
    }


    return (

        <>

<Sidebar/>
        <Box sx={{ marginLeft: mobileView ? '0px' : '280px', p: 5 }}>
                {/* Text Button Description */}
                <Box sx={{ marginTop: '10px' }}>
                    <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Examples
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        Here are some examples with these components.
                    </Typography>
                </Box>


                <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example 1
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        This example uses the <EmphasisText text={'TextCopy'} /> component with some styling.
                    </Typography>
                    </Box>

                    <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                        Preview:
                    </Typography>
                    <TextButton btnBackground="black" btnColor='white' showSnackbar endIcon={<FiCopy />}></TextButton>
                </Box>


               
                <Box sx={{ marginTop:'20px', border: "1px solid #e0e0e0", borderRadius: 1, overflow: "hidden", maxWidth: 500}}>
        <Box
            sx={{
                display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #e0e0e0" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IoTerminalOutline sx={{fontSize: "20px", marginRight: 1}}/>
                <Typography fontSize='small' sx={{ fontWeight: "bold", marginLeft:'10px'}}>Code</Typography>
            </Box>
            <Box onClick={handleCopyExampleOne} sx={{ fontSize: "16px", marginRight: 1, cursor:'pointer' }}>{iconOne}</Box>
            </Box>

        <Box sx={{ padding: "10px" }}>
        <Typography fontSize='small' sx={{ fontFamily: "monospace" }}>
        {`import { TextCopy } from 'copykit-react'`}<br/>
        {"import { fiCopy } from 'react-icons/fi'"}<br/><br/>
        {'<TextCopy btnBackground="black" btnColor="white" showSnackbar endIcon={<fiCopy />} />'}
        </Typography>

        </Box>
    </Box>







    <Box sx={{ marginTop: '50px' }}>
    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example 2
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        This example uses the <EmphasisText text={'IconCopy'} /> component with an <EmphasisText text={'<a/>'} /> prop that allows you to copy text to your clipboard
                        and immediately be directed to a new page.
                    </Typography>
                    </Box>

                    <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                        Preview:
                    </Typography>
                    <IconButton onClick={handleAnchorCopy} sx={{borderRadius:'10px'}}>
                    {anchorIcon}
                    </IconButton>
                </Box>


               
                <Box sx={{ marginTop:'20px', border: "1px solid #e0e0e0", borderRadius: 1, overflow: "hidden", maxWidth: 500}}>
        <Box
            sx={{
                display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #e0e0e0" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IoTerminalOutline  sx={{fontSize: "20px", marginRight: 1}}/>
                <Typography fontSize='small' sx={{ fontWeight: "bold", marginLeft:'10px'}}>Code</Typography>
            </Box>
            <Box onClick={handleCopyExampleTwo} sx={{ fontSize: "16px", marginRight: 1, cursor:'pointer' }}>{iconTwo}</Box>
            </Box>

        <Box sx={{ padding: "10px" }}>
        <Typography fontSize='small' sx={{ fontFamily: "monospace" }}>
        {`import { useState } from 'react'`}<br/>
        {`import { IconCopy } from 'copykit-react'`}<br/><br/>
        {`const [text, setText] = useState('123')`}<br/><br/>
        {"<IconCopy text={text} component='a' href={`/endpoint?id=${text}`} customStyling={{borderRadius:'10px'}} />"}
        </Typography>

        </Box>
    </Box>



    <Box sx={{ marginTop: '50px' }}>
    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example 3
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        This example uses the <EmphasisText text={'TextCopy'} /> component with the Material UI <EmphasisText text={'TextField'} /> component.
                    </Typography>
                    </Box>
                    
                    <Box sx={{display: smallView ? 'block' : 'flex', alignContent:'center', alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop:'20px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                           }}>
                        <TextField sx={{marginBottom: smallView ? '15px' : ''}} InputProps={{endAdornment: ( <InputAdornment position="end"><TextButton /></InputAdornment>)}} />
                        <Box sx={{border: "1px solid #e0e0e0", padding:'10px', marginLeft:'10px'}}>
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`import { useState } from 'react'`}<br/>
                            {`import { TextField, InputAdornment } from '@mui/material'`}<br/>
                            {`import { TextCopy } from 'copykit-react'`}<br/><br/>
                            {`const [text, setText] = useState('')`}<br/><br/>
                            {`<TextField`}<br/> 
                            <Box sx={{marginLeft:'20px'}}>{`onChange={(e) => setText(e.target.value)} value={text}`}<br/></Box>
                            <Box sx={{marginLeft:'20px'}}>{`InputProps={{endAdornment: (<InputAdornment position="end">`} <br/></Box>
                            <Box sx={{marginLeft:'20px'}}>{`<TextCopy text={text} /> `}<br/></Box>
                            <Box sx={{marginLeft:'20px'}}>{`</InputAdornment>)}}`}<br/></Box>
                            {`/>`}<br/>
                            
                        </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Animation & Transitions
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                    Here are some examples of how you can implement animations and transitions using the <EmphasisText text={'customStyling'} /> component.
                    </Typography>
                </Box>

                    <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example 4
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                         This animation will <EmphasisText text={'slide'} /> in from the right when hovered over the <EmphasisText text={'TextField'} /> component.
                    </Typography>
                    </Box>
                    
                    <Box sx={{display: smallView ? 'block' : 'flex', alignContent:'center', alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop:'20px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                           }}>

            <Box sx={{position:'relative', width:'fit-content'}} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <TextField 
            fullWidth
                multiline
                rows={10} // Use the `multiline` prop to make it behave like a textarea
                sx={{ marginBottom: smallView ? '15px' : '', }}
                />  
                <SmallIcon showSnackbar customStyling={{position:'absolute', opacity: hovering ? 1 : 0, top: 3, right: hovering ? 3 : -30, transition: 'right 0.3s ease'}} /> 
            </Box>
    
    
    
    
    <Box sx={{border: "1px solid #e0e0e0", padding:'10px', marginLeft:'10px'}}>
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`import { useState } from 'react'`}<br/>
                            {`import { TextField, Box } from '@mui/material'`}<br/>
                            {`import { IconCopy } from 'copykit-react'`}<br/><br/>
                            {`const [hovering, setHovering] = useState(false)`}<br/>
                            {`const [text, setText] = useState('')`}<br/><br/>
                            
                            {`<Box`}<br/> 
                            <Box sx={{marginLeft:'20px'}}>{`sx={{position:'relative', width:'fit-content'}} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>`}<br/></Box>
                            <Box sx={{marginLeft:'40px'}}>{`<TextField onChange={(e) => setText(e.target.value)} value={text} multiline rows={10} />`} <br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`<IconCopy`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`text={text}`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`showSnackbar`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`customStyling={{position:'absolute', opacity: hovering ? 1 : 0, top: 3, right: hovering ? 3 : -30, transition: 'right 0.3s ease'}}`}<br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`/>`}<br/></Box>
                            {`</Box>`}<br/>
                            
                        </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '50px' }}>
    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example 5
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        This animation will <EmphasisText text={'fade'} /> in and out when hovered over the <EmphasisText text={'TextField'} /> component.
                    </Typography>
                    </Box>
                    
                    <Box sx={{display: smallView ? 'block' : 'flex', alignContent:'center', alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop:'20px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                           }}>

            <Box sx={{position:'relative', width:'fit-content' }} onMouseEnter={() => setFadeHover(true)} onMouseLeave={() => setFadeHover(false)}>
            <TextField 
            fullWidth
                multiline
                rows={10} // Use the `multiline` prop to make it behave like a textarea
                sx={{ marginBottom: smallView ? '15px' : '', }}
                />  
                <SmallIcon showTooltip customStyling={{position:'absolute', opacity: fadeHover ? 1 : 0, top: 3, right: 3, transition: 'opacity 0.3s ease'}} /> 
            </Box>


    
    
    
    
    <Box sx={{border: "1px solid #e0e0e0", padding:'10px', marginLeft:'10px'}}>
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`import { useState } from 'react'`}<br/>
                            {`import { TextField, Box } from '@mui/material'`}<br/>
                            {`import { IconCopy } from 'copykit-react'`}<br/><br/>
                            {`const [hovering, setHovering] = useState(false)`}<br/>
                            {`const [text, setText] = useState('')`}<br/><br/>
                            
                            {`<Box`}<br/> 
                            <Box sx={{marginLeft:'20px'}}>{`sx={{position:'relative', width:'fit-content'}} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>`}<br/></Box>
                            <Box sx={{marginLeft:'40px'}}>{`<TextField onChange={(e) => setText(e.target.value)} value={text} multiline rows={10} />`} <br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`<IconCopy`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`text={text}`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`showTooltip`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`customStyling={{position:'absolute', opacity: hovering ? 1 : 0, top: 3, right: 3, transition: 'opacity 0.3s ease'}}`}<br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`/>`}<br/></Box>
                            {`</Box>`}<br/>
                            
                        </Typography>
                        </Box>
                    </Box>






                    <Box sx={{ marginTop: '50px' }}>
    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example 6
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                         This animation will emit a constant <EmphasisText text={'pulse'} /> effect.
                    </Typography>
                    </Box>
                    
                    <Box sx={{display: smallView ? 'block' : 'flex', alignContent:'center', alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop:'20px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                           }}>

            <Box sx={{position:'relative', width:'fit-content'}} >
            <TextField 
            fullWidth
                multiline
                rows={10} // Use the `multiline` prop to make it behave like a textarea
                sx={{ marginBottom: smallView ? '15px' : '', }}
                />  
                <SmallIcon 
                customStyling={{position:'absolute', top: 3, right: 3, animation: 'pulse 1.5s infinite ease-in-out', // The pulse effect
                    '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },  // Start at normal size
                    '50%': { transform: 'scale(1.1)' }, // Scale up slightly
                    '100%': { transform: 'scale(1)' }, // Return to original size
                    }}} /> 
            </Box>
    
    
    
    
    <Box sx={{border: "1px solid #e0e0e0", padding:'10px', marginLeft:'10px'}}>
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`import { useState } from 'react'`}<br/>
                            {`import { TextField, Box } from '@mui/material'`}<br/>
                            {`import { IconCopy } from 'copykit-react'`}<br/><br/>
                            {`const [text, setText] = useState('')`}<br/><br/>
                            
                            {`<Box`}<br/> 
                            <Box sx={{marginLeft:'20px'}}>{`sx={{position:'relative', width: 'fit-content'}}>`}<br/></Box>
                            <Box sx={{marginLeft:'40px'}}>{`<TextField onChange={(e) => setText(e.target.value)} value={text} multiline rows={10} />`} <br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`<IconCopy`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`text={text}`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`showTooltip`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`customStyling={{position:'absolute', top: 3, right: 3, animation: 'pulse 1.5s infinite ease-in-out',`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{"'@keyframes pulse': { '0%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.1)' }, '100%': { transform: 'scale(1)' }}}}"}<br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`/>`}<br/></Box>
                            {`</Box>`}<br/>
                            
                        </Typography>
                        </Box>
                    </Box>



                    <Box sx={{ marginTop: '50px' }}>
    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example 7
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        This animation  will <EmphasisText text={'expand'} /> when hovered over the<EmphasisText text={'IconCopy'} /> component.
                    </Typography>
                    </Box>
                    
                    <Box sx={{display: smallView ? 'block' : 'flex', alignContent:'center', alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop:'20px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                           }}>

            <Box sx={{position:'relative', width:'fit-content'}}>
            <TextField 
            fullWidth
                multiline
                rows={10} // Use the `multiline` prop to make it behave like a textarea
                sx={{ marginBottom: smallView ? '15px' : '', }}
                />  
                <SmallIcon onMouseEnter={() => setExpandHover(true)} onMouseLeave={() => setExpandHover(false)} showTooltip customStyling={{position:'absolute', top: 3, right: 3, transform: expandHover ? 'scale(1.2)' : 'scale(1)' , transition: 'transform 0.3s ease'}} /> 
            </Box>
    
    
    
    
    <Box sx={{border: "1px solid #e0e0e0", padding:'10px', marginLeft:'10px'}}>
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`import { useState } from 'react'`}<br/>
                            {`import { TextField, Box } from '@mui/material'`}<br/>
                            {`import { IconCopy } from 'copykit-react'`}<br/><br/>
                            {`const [hovering, setHovering] = useState(false)`}<br/>
                            {`const [text, setText] = useState('')`}<br/><br/>
                            
                            {`<Box`}<br/> 
                            <Box sx={{marginLeft:'20px'}}>{`sx={{position:'relative', width:'fit-content'}}>`}<br/></Box>
                            <Box sx={{marginLeft:'40px'}}>{`<TextField onChange={(e) => setText(e.target.value)} value={text} multiline rows={10} />`} <br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`<IconCopy`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`text={text} showTooltip`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}`}<br/></Box>
                            <Box sx={{marginLeft:'80px'}}>{`customStyling={{position:'absolute', top: 3, right: 3,`} </Box>
                            <Box sx={{marginLeft:'80px'}}>{`transform: hover ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s ease'}}`}<br/></Box>
                            <Box sx={{marginLeft:'60px'}}>{`/>`}<br/></Box>
                            {`</Box>`}<br/>
                            
                        </Typography>
                        </Box>
                    </Box>





                    <Box sx={{ marginTop: '30px', display: 'flex' }}>
  <Typography variant="subtitle2" sx={{ color: 'grey' }} component="span">
    If you have any questions on the components, styling, or examples, feel free to reach out 
    <Typography variant="subtitle2" onClick={() => setOpenFeedback(true)} sx={{ fontWeight: 800, cursor: 'pointer' }} component="span"> here
    </Typography>.
  </Typography>
</Box>



            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={(e) => setOpen(false)}
                message={<Box>Link to webpage with endpoint: <strong>/endpoint?id=123</strong> with text copied to clipboard</Box>}
            />

        <ContactModal open={openFeedback} handleClose={() => setOpenFeedback(false)} />


                    
                </Box>


                <DocuFooter prev={'Styling & Props'} prevLink={'/styling'} />
    
        
        </>
    )
}

export default Examples