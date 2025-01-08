import { Box, Typography, Chip, Drawer, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MenuIcon from '@mui/icons-material/Menu';
import ContactModal from '../Home/ContactModal';
import CatLogo from '../assets/cat.png'
import { FaCat } from "react-icons/fa6";
import Version from "./Version";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useThemeContext } from "../context/ThemeContext";


const sections = [
  { id: 1, label: "Installation", to: "/installation", category: "Get Started" },
  { id: 2, label: "Text Copy Button", to: "/text-button", category: "API" },
  { id: 3, label: "Text & Icon Copy Button", to: "/icon-text-button", category: "API" },
  { id: 4, label: "Icon Copy Button", to: "/icon-button", category: "API" },
  { id: 5, label: "Styling & Props", to: "/styling", category: "Props" },
  { id: 6, label: "Examples", to: "/examples", category: "Context" },
];

const Sidebar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [open, setOpen] = useState(false); // Single state for sidebar visibility
  const [openFeedback, setOpenFeedback] = useState(false)
  const [openVersion, setOpenVersion] = useState(false)

  const { toggleTheme, mode } = useThemeContext()

  const mobileView = useMediaQuery('(max-width:750px)');

  const handleToggleSidebar = () => {
    setOpen(true); // Toggle sidebar visibility
  };

  const openModal = () => {
    setOpenFeedback(true)
  }

  const handleClose = () => {
    setOpen(false); // Explicitly close sidebar
  };

  const handleCloseModal = () => {
    setOpenFeedback(false)
  }

  const openVersionModal = () => {
    setOpenVersion(true)
  }

  const handleVersionClose = () => {
    setOpenVersion(false)
  }

  useEffect(() => {
    const currentSection = sections.find((section) => section.to === location.pathname);
    if (currentSection) {
      setActiveSection(currentSection.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <>
      {/* Menu Button for Mobile View */}
      {mobileView && (
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 1301,
          }}
        >
          <IconButton
            onClick={handleToggleSidebar}
            sx={{
              border: '1px solid lightgrey',
              borderRadius: '10px',
              boxShadow: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={mobileView ? "temporary" : "permanent"}
        open={!mobileView || open}
        onClose={handleClose}
        sx={{
          width: mobileView ? 0 : 280,
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
            backgroundColor: mode === 'light' ? "#FFFFFF" : '#000000',
          },
        }}
      >
        {/* Top Section - Name */}
        <Box sx={{ position:'relative', padding: 3, textAlign: "center", borderBottom: "1px solid #e0e0e0", display:'flex', alignItems:'center'}}>
          <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "bold", color: mode === 'light' ? 'black' : 'white' }}>CopyKit</Typography>
          <Typography sx={{marginLeft:'5px', color:'grey'}}>by Patrick Bell</Typography>
        </Box>


        {/* Dynamically Render Sections */}
        {["Get Started", "API", "Props", "Context"].map((category) => (
          <Box key={category} sx={{ padding: 2, borderBottom: "1px solid #e0e0e0" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Poppins", fontWeight: "medium", color: "grey", marginBottom: 1 }}
            >
              {category}
            </Typography>
            {sections
              .filter((section) => section.category === category)
              .map((section) => (
                <Chip
                  key={section.id}
                  component={section.to ? Link : "div"}
                  to={section.to || undefined}
                  sx={{
                    fontFamily: "Poppins",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    width:'100%',
                    background: activeSection === section.id 
                    ? mode === 'light' 
                        ? '#f5f5f5'
                        : '#333333' 
                    : mode === 'light' 
                        ? 'white'   
                        : mobileView ? '#252525' : 'black', 
                    marginBottom: "5px",
                  }}
                  clickable={!section.disabled}
                  disabled={section.disabled}
                  label={section.label}
                  onClick={() => section.to && setActiveSection(section.id)}
                />
              ))}
          </Box>
        ))}

        {/* Theme Toggler Section */}
        <Box
          sx={{
            marginTop: "auto",
            padding: 2,
            borderTop: "1px solid #e0e0e0",
            textAlign: "right",
          }}
        >
          <Tooltip arrow placement="top" title={'Toggle Theme'}>
            <IconButton
              size="small"
              sx={{  border: `1px solid lightgrey`, borderRadius: '10px', marginLeft: '5px', width:'36px', height:'36px' }}
              onClick={toggleTheme}
            >
              <WbSunnyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title={'View Version'}>
            <IconButton
              size="small"
              sx={{ border: `1px solid lightgrey`, borderRadius: '10px', marginLeft: '5px', width:'36px', height:'36px' }}
              onClick={openVersionModal}
            >
              <FaCat />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title={'Leave Feedback'}>
            <IconButton
              size="small"
              sx={{ border: `1px solid lightgrey`, borderRadius: '10px', marginLeft: '5px' }}
              onClick={openModal}
            >
              <RateReviewIcon />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title={'View Github'}>
            <IconButton
              size="small"
              sx={{ border: `1px solid lightgrey`, borderRadius: '10px', marginLeft: '5px' }}
              component="a"
              href="https://github.com"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <ContactModal open={openFeedback} handleClose={handleCloseModal} />
        <Version open={openVersion} handleClose={handleVersionClose} />
      </Drawer>
    </>
  );
};

export default Sidebar;
