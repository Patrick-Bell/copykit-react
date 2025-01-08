import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material"
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useThemeContext } from '../context/ThemeContext'

const ContactModal = ({ open, handleClose }) => {

  const { mode } = useThemeContext()

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {/* Title */}
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
          Get in Touch
        </DialogTitle>
        
        <Divider />
  
        {/* Content */}
        <DialogContent sx={{ textAlign: "center", py: 3 }}>
          <DialogContentText sx={{ marginBottom: 2 }}>
            Feel free to reach out through the following channels:
          </DialogContentText>
  
          {/* LinkedIn */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 1.5,
              gap: 1,
              textDecoration:'none',
            }}
          >
            <IoLogoLinkedin size={24} color="grey" />
            <Box
            component='a'
              href="https://www.linkedin.com/in/patrick-bell-1bb0a6216"
              target="_blank"
              sx={{ fontSize: "14px", textDecoration:'underline', color:'grey'}}
            >
              linkedin.com/in/patrick-bell-1bb0a6216
            </Box>
          </Box>
  
          {/* Email */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <MdEmail size={24} color='grey' />
            <Box
            component='a'
              href="mailto:patrickbell1302@gmail.com"
              underline="hover"
              sx={{ fontSize: "14px", textDecoration:'underline', color:'grey' }}
            >
              patrickbell1302@gmail.com
            </Box>
          </Box>
        </DialogContent>

  
        <Divider />
  
        {/* Actions */}
        <DialogActions sx={{ justifyContent: "center", padding: 2 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="black"
            sx={{ minWidth: 100 }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default ContactModal