import {createTheme} from "@mui/material";

const {palette} = createTheme();
const {augmentColor} = palette;
export const createColor = (mainColor) => augmentColor({color: {main: mainColor}});
export const DEFAULT_THEME = createTheme({
    palette: {
        primary: createColor('#2C9BA3'),
        secondary: {
            main: '#27363F',
            light: '#8B91A1'
        },
        error: createColor('#DA1C1C'),
        info: createColor('#C7C7CF')
    },
    typography: {
        fontFamily: 'Mulish'
    }
});