import Sidebar from "./Drawer"
import { Box, Tooltip, IconButton, Typography, useMediaQuery } from "@mui/material"
import ComponentHeader from "../utils/ComponentHeader"
import ImportComponent from "../utils/ImportConponent"
import Steps from "../utils/Steps"
import EmphasisText from "../utils/EmphasisText"
import IconTextButton from "../IconTextCopy"
import RenderDefault from "../utils/RenderDefault"
import { useState } from "react"
import { VscFilterFilled } from "react-icons/vsc";
import { FiCopy } from "react-icons/fi";
import PlaygroundDrawer from "../utils/PlaygroundDrawer"
import { IoTerminalOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import PropsTable from "../utils/PropsTable"
import { textButtonProps } from "../api/Props"
import DocuFooter from "./DocuFooter"



const IconTextButtonPage = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state
    const [buttonText, setButtonText] = useState('Copy me!');
    const [buttonVariant, setButtonVariant] = useState('outlined')
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const [duration, setDuration] = useState(3000)
    const [icon, setIcon] = useState(<FiCopy/>)
    const [buttonColor, setButtonColor] = useState('black'); // Default Material UI blue
    const [buttonBackground, setButtonBackground] = useState('white')
    const [customStyling, setCustomStyling] = useState({})
    const mobileView = useMediaQuery('(max-width:750px)');


    const stepOne = (
        <>
          Make sure you have the relevant components imported into your file. Then, define a variable called 
          <EmphasisText text={'text'} /> 
          by using <code>useState</code>. The variable can be named anything, but in this case, we will use 
          <EmphasisText text={'text'} /> 
          for simplicity.
        </>
    )

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };


    const handleCopy = () => {
        navigator.clipboard.writeText(`<TextIconCopy btnVariant='${buttonVariant}' text={text} btnColor='${buttonColor}' btnBackground='${buttonBackground}' showSnackbar={${showSnackbar}} showTooltip={${showTooltip}} duration={${duration}} />`)
        setIcon(<IoMdCheckmark />)

        setTimeout(() => {
            setIcon(<FiCopy />)
        }, 3000);
    }



    return (


        <>
        <Sidebar />

        <Box sx={{ marginLeft: mobileView ? '0' : '280px', p: 5 }}>
        <ComponentHeader component={'TextIconCopy'} />
        <ImportComponent component={'TextIconCopy'} />

        <Steps component={`TextIconCopy`} 
            stepOne={stepOne} 
            stepTwo={'Now that you have everything imported and have created a text variable, it is time to set up the text. Use the textfield component and configure the usual values and onchange.'}
            stepThree={'The final step is to use the components text prop to link the variable you have just set in within the textfield. You can customise the actual textfield component how you wish.'}
          />

        <RenderDefault component={<IconTextButton />}/>

        <Box sx={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                        Playground
                    </Typography>
                    <Tooltip title={`Start customising the button!`} arrow placement='bottom'>
                    <IconButton
                    fontSize='small'
                        onClick={toggleDrawer(true)}
                    >
                        <VscFilterFilled fontSize={'medium'}/>
                    </IconButton>
                    </Tooltip>
                </Box>

                <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
                    Click the settings icon to customize the button.
                </Typography>

                {/* Preview */}
                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                        Preview:
                    </Typography>
                    <IconTextButton btnColor={buttonColor} text={buttonText} btnVariant={buttonVariant} btnBackground={buttonBackground} showSnackbar={showSnackbar} showTooltip={showTooltip} duration={duration}
                        buttonText={buttonText} customStyling={customStyling}>
                    </IconTextButton>
                </Box>


            <PlaygroundDrawer toggleDrawer={toggleDrawer} buttonBackground={buttonBackground} setButtonBackground={setButtonBackground} isDrawerOpen={isDrawerOpen} 
           buttonColor={buttonColor} setButtonColor={setButtonColor} buttonVariant={buttonVariant} setButtonVariant={setButtonVariant} showSnackbar={showSnackbar} 
           setShowSnackbar={setShowSnackbar} showTooltip={showTooltip} setShowTooltip={setShowTooltip} duration={duration} setDuration={setDuration} buttonText={buttonText}
           setButtonText={setButtonText}/>

        <Box sx={{ marginTop:'20px', border: "1px solid #e0e0e0", borderRadius: 1, overflow: "hidden", maxWidth: 500}}>
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #e0e0e0" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IoTerminalOutline sx={{fontSize: "20px", marginRight: 1}}/>
                        <Typography fontSize='small' sx={{ fontWeight: "bold", marginLeft:'10px'}}>Code</Typography>
                    </Box>
                    <Box sx={{ fontSize: "16px", marginRight: 1, cursor:'pointer' }} onClick={handleCopy}>{icon}</Box>
                    </Box>

                <Box sx={{ padding: "10px" }}>
                    <Typography fontSize='small' sx={{ fontFamily: "monospace" }}>
                        {`<TextIconCopy btnVariant='${buttonVariant}' text={text} btnColor='${buttonColor}' btnBackground='${buttonBackground}' showSnackbar={${showSnackbar}} showTooltip={${showTooltip}} duration={${duration}} />`}
                    </Typography>
                </Box>
            </Box>

            <PropsTable tableProps={textButtonProps} component={'TextIconCopy'} />


        </Box>

        <DocuFooter prev={'TextCopy Button'} next={'IconCopy Button'} prevLink={'/text-button'} nextLink={'/icon-button'} />


        
        
        </>
    )
}


export default IconTextButtonPage