import { useState } from 'react';
import { Box, Button, Snackbar, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

function IconTextButton({
  btnVariant = 'outlined',
  btnColor = 'black',
  text = '',
  btnBackground = 'white',
  showSnackbar = false,
  showTooltip = false,
  duration = 1000,
  customStyling = {}, // Default styling
  ...props
}) {
  const [btnText, setBtnText] = useState('Copy');
  const [icon, setIcon] = useState(<ContentCopyIcon />);
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
    }

    if (showSnackbar) {
      setOpen(true);
    }

    setBtnText('Copied!');
    setIcon(<CheckIcon />);

    setTimeout(() => {
      setBtnText('Copy');
      setIcon(<ContentCopyIcon />);
      setOpen(false);
    }, duration);
  };

  const buttonProps = {
    size: 'small',
    variant: btnVariant,
    sx: {
      color: btnColor,
      border: `1px solid ${btnColor}`,
      background: btnBackground,
      boxShadow: 'none',
      ...customStyling, // Apply custom styles dynamically
    },
    onClick: handleCopy,
    endIcon: icon,
    ...props, // Pass down additional props
  };

  return (
    <Box>
      {showTooltip ? (
        <Tooltip arrow placement="bottom" title="Click to copy!">
          <Button {...buttonProps}>{btnText}</Button>
        </Tooltip>
      ) : (
        <Button {...buttonProps}>{btnText}</Button>
      )}

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        message="Text copied to clipboard!"
        autoHideDuration={duration}
      />
    </Box>
  );
}

export default IconTextButton;
