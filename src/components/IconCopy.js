import { useState } from 'react';
import { Box, Button, IconButton, TextField, Tooltip, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';


function SmallIcon({ text='', btnVariant='outlined', btnColor='black', iconSize='small', showSnackbar=false, showTooltip=false, duration=3000, border=false, btnBackground='white', 
  customStyling = {}, ...props}) {
  const [btnText, setBtnText] = useState(<ContentCopyIcon fontSize={iconSize} />);
  const [open, setOpen] = useState(false)


  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setBtnText(<CheckIcon fontSize={iconSize}/>);

    if (showSnackbar) {
      setOpen(true)
    }


    setTimeout(() => {
      setBtnText(<ContentCopyIcon fontSize={iconSize} />)
      setOpen(false)
    }, duration);
  };
//

const buttonProps = {
  size: iconSize,
  variant: btnVariant,
  sx: {
    color: btnColor,
    border: border === false ? 'none' : `1px solid ${btnColor}`,
    background: btnBackground,
    boxShadow: 'none',
    ...customStyling, // Apply custom styles dynamically
  },
  onClick: handleCopy,
  ...props, // Pass down additional props
};


  return (
    <Box>
      {showTooltip ? (
      <Tooltip title={'Copy'} arrow>
      <IconButton
        {...buttonProps}
      >
        {btnText}
      </IconButton>
      </Tooltip>
      ) : (
        <IconButton
        {...buttonProps}
      >
        {btnText}
      </IconButton>
      )}
     

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={(e) => setOpen(false)}
        message="Text copied to clipboard!"
      />


    </Box>
  );
}

export default SmallIcon;
