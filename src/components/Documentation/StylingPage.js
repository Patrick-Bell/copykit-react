import { Box, Typography, useMediaQuery  } from "@mui/material"
import Sidebar from "./Drawer"
import EmphasisText from "../utils/EmphasisText"
import SmallIcon from "../IconCopy"
import { Height, Padding, TerminalOutlined } from "@mui/icons-material"
import { transform } from "framer-motion"
import { useState } from "react"
import { IoTerminalOutline } from "react-icons/io5";
import TextButton from "../TextCopy"
import IconTextButton from "../IconTextCopy"
import DocuFooter from "./DocuFooter"
import { FiCopy } from "react-icons/fi";




const StylingPage = () => {

    const [defaultText, setDefaultText] = useState('<IconCopy />')
    const [text, setText] = useState('<IconCopy showSnackbar customStyling={{borderRadius: "10px", padding: "6px", "&:hover": { transform: "scale(1.1)" }}} />');
    const mobileView = useMediaQuery('(max-width:750px)');


    return (

        <>
        <Sidebar/>
        <Box sx={{ marginLeft: mobileView ? '0' : '280px', p: 5 }}>
                {/* Text Button Description */}
                <Box sx={{ marginTop: '10px' }}>
                    <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Styling
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        You can style the copy to clipboard beyond the default themes and props.
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Custom Styling
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        Simply use the prop <EmphasisText text={'customStyling'}/> to allow for custom styling where you can overwrite default themes. This is available
                        in all three components.
                    </Typography>
                    </Box>


                    <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        Lets compare a default <EmphasisText text={'IconCopy Button'} /> to a slightly customised <EmphasisText text={'IconCopyButton'} />.
                        There are some minor changes such as the shadow when you go to hover, slightly more padding and an animation when hovering.
                    </Typography>
                    

                    <Box sx={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', color:'grey' }}>
                        Default:
                    </Typography>                    
                    <Box sx={{marginLeft:'10px'}}>
                <SmallIcon text={defaultText}/>
                </Box>
                <Box
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop: '10px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                            marginLeft:'10px'
                        }}
                    >
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`<IconCopy />`}<br/>
                        </Typography>
                    </Box>
                        </Box>

                        <Box sx={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', color:'grey' }}>
                        Customised:
                    </Typography>
                    <Box sx={{marginLeft:'10px'}}>
                    <SmallIcon disableRipple customStyling={{borderRadius:'10px', padding:'6px', '&:hover': { transform: 'scale(1.1)' }  }} text={text} showSnackbar/>
                    </Box>
                    <Box
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop: '10px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                            marginLeft:'10px'
                        }}
                    >
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`<IconCopy showSnackBar customStyling={{borderRadius:'10px', padding:'6px', "&hover': { transform: 'scale(1.1)' }}} />`}<br/>
                        </Typography>
                    </Box>
                    
                        </Box>

                    </Box>

                    <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Props
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                        All three components are comptaible with props offered by Material UI. Please note that overriding the <EmphasisText text={'onClick'} /> prop will result in
                        the copy to clipboard function to not work. However, you can write your own, or use other props such as <EmphasisText text={'disabled'} />, 
                        <EmphasisText text={'startIcon'} />, <EmphasisText text={'disableRipple'} />, <EmphasisText text={'href'} /> & more!
                    </Typography>
                </Box>

                <Box sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Example
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                       Here are some examples with props being used.
                    </Typography>
                    

                    <Box sx={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', color:'grey' }}>
                        disabled:
                    </Typography>                    
                    <Box sx={{marginLeft:'10px'}}>
                <TextButton disabled/>
                </Box>
                <Box
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop: '10px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                            marginLeft:'10px'
                        }}
                    >
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`<TextCopy disabled />`}<br/>
                        </Typography>
                    </Box>
                        </Box>

                        <Box sx={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', color:'grey' }}>
                         startIcon:
                    </Typography>
                    <Box sx={{marginLeft:'10px'}}>
                    <TextButton startIcon={<FiCopy />}/>
                    </Box>
                    <Box
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop: '10px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                            marginLeft:'10px'
                        }}
                    >
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`<TextCopy startIcon={<fiCopy />} />`}<br/>
                        </Typography>
                    </Box>
                    
                        </Box>

                        <Box sx={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2" sx={{ fontFamily: 'Poppins', color:'grey' }}>
                        href:
                    </Typography>
                    <Box sx={{marginLeft:'10px'}}>
                    <TextButton component='a' />
                    </Box>
                    <Box
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px",
                            marginTop: '10px',
                            width: 'fit-content',
                            border: "1px solid #e0e0e0",
                            marginLeft:'10px'
                        }}
                    >
                        <Typography fontSize={'small'} fontFamily={'monospace'}>
                            {`<TextCopy component='a' href='/endpoint' text={text} />`}<br/>
                        </Typography>

                    </Box>
                    
                        </Box>

    
                    </Box>
                    
            </Box>

            <DocuFooter prev={'IconCopy Button'} next={'Examples'} prevLink={'/icon-button'} nextLink={'/examples'}/>

        
        </>
    )
}

export default StylingPage