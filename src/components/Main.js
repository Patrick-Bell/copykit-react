import { useState } from 'react';
import { Box, MenuItem, Select, TextField } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import Snackbar from '@mui/material/Snackbar';
import IconButton from './IconTextCopy'
import SmallIcon from '../components/IconCopy';
import TextButton from './TextCopy';

function Main() {
  const [btnVariant, setBtnVariant] = useState('outlined');
  const [btnColor, setBtnColor] = useState('blue');
  const [text, setText] = useState('');
  const [btnText, setBtnText] = useState(<ContentCopyIcon fontSize={'small'} />);
  const [iconSize, setIconSize] = useState('small');
  const [value, setValue] = useState(0); // Track the selected value
  const [open, setOpen] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value); // Update value when the dropdown selection changes
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setBtnText(<CheckIcon fontSize={iconSize} />);
    setTimeout(() => setBtnText(<ContentCopyIcon fontSize={iconSize} />), 2000); // Reset after 2 seconds
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', marginTop: '50px' }}>
      {/* Select dropdown to choose button type */}
      <Select
        value={value}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value={0}>Icon Button</MenuItem>
        <MenuItem value={1}>Text Button</MenuItem>
        <MenuItem value={2}>Small Icon</MenuItem>
      </Select>

      {/* Conditional Rendering of the buttons based on selected value */}
      {value === 0 && (
        <IconButton btnText={btnText} btnVariant={btnVariant} btnColor={btnColor} iconSize={iconSize} text={text} open={open} setOpen={setOpen} />
      )}

      {value === 1 && (
        <TextButton btnText={btnText} btnVariant={btnVariant} btnColor={btnColor} />
      )}

      {value === 2 && (
        <SmallIcon btnText={btnText} iconSize={iconSize} open={open} text={text} setOpen={setOpen}/>
      )}

      {/* Input Field for the text to copy */}
      <TextField
        size="small"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to copy"
      />

    <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Copied to Clipboard!"
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
      />


    </Box>
  );
}

export default Main;
