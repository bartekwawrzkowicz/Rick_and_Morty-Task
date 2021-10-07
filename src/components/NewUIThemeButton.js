import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const codeodriveTheme = createTheme({
    palette: {
        primary: {
            main: '#FD957C',
        },
        secondary: {
            main: 'rgba(65, 65, 65, 0.95)',
        },
    },
});

const Palette = () => {
    return (
        <ThemeProvider theme={codeodriveTheme}>
            <Button size="small" variant="contained" href="http://codeodrive.com">codeodrive.com</Button>
        </ThemeProvider>
    );
}

export default Palette;