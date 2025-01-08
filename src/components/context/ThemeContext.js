import { useState, useEffect, useContext, createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    // State to track the theme mode (light or dark)
    const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

    // Toggle Theme
    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newMode); // Save theme to localStorage
            return newMode;
        });
    };

    // Update theme based on mode
    const theme = createTheme({
        palette: {
            mode: mode,
            ...(mode === 'light'
                ? {
                      primary: { main: '#000000' },
                      background: { default: 'white' },
                  }
                : {
                      primary: { main: '#90caf9' },
                      background: { default: '#121212' },
                  }),
        },
    });

    useEffect(() => {
        // Ensure theme is applied from localStorage on load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setMode(savedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);
