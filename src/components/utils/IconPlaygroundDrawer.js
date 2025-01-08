import { Box, Drawer, Typography, TextField, Select, MenuItem, Checkbox, Button } from "@mui/material"

const IconPlaygroundDrawer = ({ isDrawerOpen, toggleDrawer, buttonColor, setButtonColor, buttonBackground, setButtonBackground, buttonText, setButtonText, buttonVariant, 
    setButtonVariant, duration, setDuration, showSnackbar, setShowSnackbar, showTooltip, setShowTooltip, showBorder, setShowBorder, iconSize, setIconSize }) => {

    return (
        <>

            <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        padding: 3,
                        borderTopLeftRadius: 12,
                        borderRadius: '10px',
                        height: 'auto',
                        margin:"30px"
                    }
                }}
            >
                <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 600, marginBottom: 2 }}>
                    Playground Settings
                </Typography>

                {/* Color Picker */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <Typography variant="subtitle2">Button Color:</Typography>
                    <input
                        type="color"
                        value={buttonColor}
                        onChange={(e) => setButtonColor(e.target.value)}
                        style={{ border: 'none', width: '50px', height: '30px', cursor: 'pointer' }}
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <Typography variant="subtitle2">Background Color:</Typography>
                    <input
                        type="color"
                        value={buttonBackground}
                        onChange={(e) => setButtonBackground(e.target.value)}
                        style={{ border: 'none', width: '50px', height: '30px', cursor: 'pointer' }}
                    />
                </Box>

                {/* Text Input */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <Typography variant="subtitle2">Text to copy</Typography>
                    <TextField
                        size="small"
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                        placeholder="Enter Button Text"
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <Typography variant="subtitle2">Button Variant:</Typography>
                    <Select
                        value={buttonVariant}
                        onChange={(e) => setButtonVariant(e.target.value)}
                        size="small"
                        sx={{ width: '150px' }}
                    >
                        <MenuItem value="contained">Contained</MenuItem>
                        <MenuItem value="outlined">Outlined</MenuItem>
                    </Select>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                    <Typography variant="subtitle2">Icon Size:</Typography>
                    <Select
                        value={iconSize}
                        onChange={(e) => setIconSize(e.target.value)}
                        size="small"
                        sx={{ width: '150px' }}
                    >
                        <MenuItem value="small">Small</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="large">Large</MenuItem>
                    </Select>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 , gap:2}}>
                    <Typography variant="subtitle2">Duration</Typography>
                    <TextField
                        value={duration}
                        type='number'
                        onChange={(e) => setDuration(e.target.value)}
                        size="small"
                    >
                    </TextField>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <Typography variant="subtitle2">Show Snackbar</Typography>
                    <Checkbox
                        checked={showSnackbar}
                        onChange={(e) => setShowSnackbar(e.target.checked)}
                        size="small"
                    >
                    </Checkbox>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <Typography variant="subtitle2">Show Tooltip</Typography>
                    <Checkbox
                        checked={showTooltip}
                        onChange={(e) => setShowTooltip(e.target.checked)}
                        size="small"
                    >
                    </Checkbox>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <Typography variant="subtitle2">Show Border</Typography>
                    <Checkbox
                        checked={showBorder}
                        onChange={(e) => setShowBorder(e.target.checked)}
                        size="small"
                    >
                    </Checkbox>
                </Box>


                {/* Close Button */}
                <Box sx={{ marginTop: 3, textAlign: 'right' }}>
                    <Button sx={{background:'grey'}} variant="contained" onClick={toggleDrawer(false)}>
                        Close
                    </Button>
                </Box>
            </Drawer>
        
        </>
    )
}

export default IconPlaygroundDrawer