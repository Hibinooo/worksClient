import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useContext, useMemo, useState } from 'react'
import { themeOptions } from '../../theme';

export const useTheme = () => useContext(ThemeContext);

export const ThemeContext = React.createContext("light");

const themes = ['light', 'dark'];//

const ThemesProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const changeMode = () => setMode(prev => themes.filter(e => e !== mode)[0])
    const theme = useMemo(() => createTheme(themeOptions(mode)), [mode]);


    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={[mode, changeMode]}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}

export default ThemesProvider