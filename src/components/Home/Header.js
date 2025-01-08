import { Box, Typography, IconButton, Button, Tooltip, } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Link } from "react-router-dom";

const Header = ({ setOpen }) => {

    return (

        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Box>
            <Typography variant="subtitle2" sx={{fontFamily: 'Poppins', fontWeight:700}}></Typography>
        </Box>
        <Box>
        <Tooltip title={'Leave Feedback'} arrow placement='bottom'>
        <IconButton
            size="small"
            sx={{ border: `1px solid lightgrey`, borderRadius:'10px', marginLeft:'5px' }}
            onClick={() => setOpen(true)}
        >
            <RateReviewIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title={'View Github'} arrow placement='bottom'>
        <IconButton
            size="small"
            sx={{  border: `1px solid lightgrey`, borderRadius:'10px', marginLeft:'5px' }}
        >
            <GitHubIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title={'View Documentation'} arrow placement='bottom'>
        <IconButton
        component={Link}
        to='/installation'
            size="small"
            sx={{ border: `1px solid lightgrey`, borderRadius:'10px', marginLeft:'5px' }}
        >
            <ArticleIcon />
        </IconButton>
        </Tooltip>
        </Box>
    </Box>

    )
}

export default Header