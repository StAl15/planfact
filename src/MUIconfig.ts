import {createTheme} from "@mui/material";

const {palette} = createTheme();
const {augmentColor} = palette;
export const createColor = (mainColor) => augmentColor({color: {main: mainColor}});
export const DEFAULT_THEME = createTheme({
    palette: {
        primary: createColor('#2C9BA3'),
        secondary: createColor('#27363F'),
        error: createColor('#DA1C1C'),

    },
});