import { useState } from 'react';
import { Box, Button, TextField, Snackbar, Tooltip } from '@mui/material';

function TextButton({ btnVariant='outlined', btnColor='black', text, btnBackground='white', showSnackbar=false, // Disable onClick functionality
  showTooltip=false, duration=3000, customStyling = {}, ...props }) {

  const [btnText, setBtnText] = useState('Copy');
  const [open, setOpen] = useState(false)
  

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setBtnText('Copied!');

    if (showSnackbar) {
      setOpen(true)
    }

    setTimeout(() => {
      setBtnText('Copy')
      setOpen(false)

    }, duration);
    
  };


  const buttonProps = {
    size: 'small',
    variant: btnVariant,
    sx: {
      color: btnColor,
      border: `1px solid ${btnColor}`,
      background: btnBackground,
      ...customStyling, // Apply custom styles dynamically
    },
    onClick: handleCopy,
    ...props, // Pass down additional props
  };


  return (
    <Box
    >
      {showTooltip ? (
        <Tooltip title="Click to copy" arrow>
          <Button
            {...buttonProps}
          >
            {btnText}
          </Button>
        </Tooltip>
      ) : (
        <Button
        {...buttonProps}
        >
          {btnText}
        </Button>
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

export default TextButton;
