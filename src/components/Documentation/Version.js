import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material"
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Version = ({ open, handleClose }) => {

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {/* Title */}
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
            Version
        </DialogTitle>
        
        <Divider />
  
        {/* Content */}
        <DialogContent sx={{ textAlign: "center" }}>
          <DialogContentText>
            Current Version: 1.0.0
          </DialogContentText>
        </DialogContent>
  
        <Divider />
  
        {/* Actions */}
        <DialogActions sx={{ justifyContent: "center", }}>
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

export default Version