import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import '../styles/components/NewUIThemeButton.scss';

const newButtonTheme = createTheme({
    palette: {
        primary: {
            main: '#322F3D',
        },
        secondary: {
            main: '#59405C',
        },
    },
});

const Buttons = props => {
    return (
        <ThemeProvider theme={newButtonTheme}>
            {props.pagination ? (
                <Button size="large" variant="contained" onClick={props.clickBack}>back</Button>
            ) : null}
            {props.pagination ? (
                <span className="page-info">{props.pageNumber}</span>
            ) : null}
            <Button size="large" variant="contained" onClick={props.clickNext}>next</Button>
        </ThemeProvider>
    );
}

export default Buttons;