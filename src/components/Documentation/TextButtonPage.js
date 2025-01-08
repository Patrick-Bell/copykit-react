import { useState } from 'react';
import { Box, Typography, IconButton, Tooltip , useMediaQuery} from "@mui/material";
import TextButton from '../TextCopy';
import { VscFilterFilled } from "react-icons/vsc";
import { IoTerminalOutline } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import Sidebar from './Drawer';
import PropsTable from '../utils/PropsTable';
import Steps from '../utils/Steps';
import ImportComponent from '../utils/ImportConponent';
import ComponentHeader from '../utils/ComponentHeader';
import RenderDefault from '../utils/RenderDefault';
import PlaygroundDrawer from '../utils/PlaygroundDrawer';
import { textButtonProps } from '../api/Props';
import EmphasisText from '../utils/EmphasisText';
import DocuFooter from './DocuFooter';
import IconTextButton from '../IconTextCopy';
//

const TextButtonPage = () => {
    const [buttonColor, setButtonColor] = useState('black'); // Default Material UI blue
    const [buttonBackground, setButtonBackground] = useState('white')
    const [buttonText, setButtonText] = useState('Copy me!');
    const [buttonVariant, setButtonVariant] = useState('outlined')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const [duration, setDuration] = useState(3000)
    const [icon, setIcon] = useState(<FiCopy/>)
    const mobileView = useMediaQuery('(max-width:750px)');


    const handleCopy = () => {
        navigator.clipboard.writeText(`<TextCopy btnVariant='${buttonVariant}' text={text} btnColor='${buttonColor}' btnBackground='${buttonBackground}' showSnackbar={${showSnackbar}} showTooltip={${showTooltip}} duration={${duration}} />`)
        setIcon(<IoMdCheckmark />)

        setTimeout(() => {
            setIcon(<FiCopy />)
        }, 3000);
    }

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

    return (
        <>
        <Sidebar />

            <Box sx={{ marginLeft: mobileView ? '0' : '280px', p: 5 }}>
                {/* Text Button Description */}
                <ComponentHeader component={'TextCopy'} />

                {/* Importing the Component */}
                <ImportComponent component={'TextCopy'} />

                <Steps component={`TextCopy`} 
                stepOne={stepOne} 
                stepTwo={'Now that you have everything imported and have created a text variable, it is time to set up the text. Use the textfield component and configure the usual values and onchange.'}
                stepThree={'The final step is to use the components text prop to link the variable you have just set in within the textfield. You can customise the actual textfield component how you wish.'}
                />



                {/* Using the Component */}
                <RenderDefault component={<TextButton />}/>

                {/* Playground Section */}
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
                    <TextButton btnColor={buttonColor} text={buttonText} btnVariant={buttonVariant} btnBackground={buttonBackground} showSnackbar={showSnackbar} showTooltip={showTooltip} duration={duration}>
                        {buttonText}
                    </TextButton>

                </Box>

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
                {`<TextCopy btnVariant='${buttonVariant}' text={text} btnColor='${buttonColor}' btnBackground='${buttonBackground}' showSnackbar={${showSnackbar}} showTooltip={${showTooltip}} duration={${duration}} />`}
            </Typography>
        </Box>
    </Box>


    <PropsTable tableProps={textButtonProps} component={'TextCopy'} />

    </Box>


            {/* Drawer Component */}
           <PlaygroundDrawer toggleDrawer={toggleDrawer} buttonBackground={buttonBackground} setButtonBackground={setButtonBackground} isDrawerOpen={isDrawerOpen} 
           buttonColor={buttonColor} setButtonColor={setButtonColor} buttonVariant={buttonVariant} setButtonVariant={setButtonVariant} showSnackbar={showSnackbar} 
           setShowSnackbar={setShowSnackbar} showTooltip={showTooltip} setShowTooltip={setShowTooltip} duration={duration} setDuration={setDuration} buttonText={buttonText}
           setButtonText={setButtonText}/>


            <DocuFooter prev={'Installation'} next={'TextIconCopy Button'} prevLink={'/installation'} nextLink={'/icon-text-button'} />


        </>
    );
};

export default TextButtonPage;
