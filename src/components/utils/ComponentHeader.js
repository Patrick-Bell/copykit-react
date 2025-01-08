import { Box, Typography } from "@mui/material";
import EmphasisText from "./EmphasisText";

const ComponentHeader = ({ component }) => {
  return (
    <>
      <Box sx={{ marginTop: '10px' }}>
        <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
          {component} Button
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>
          The <EmphasisText text={component} /> component is an user-friendly and interactive button built using Material UI. It simplifies copying text to the clipboard by providing clear visual 
          feedback. It has a before state such as copy or an icon equivaent and will display a successful message once clicked, ensuring users know the action was successful.
        </Typography>
      </Box>
    </>
  );
};

export default ComponentHeader;
