declare module '@mui/material/styles' {
    import {PaletteColorOptions} from "@mui/material";

    interface CustomPalette {
        green: PaletteColorOptions;
    }

    interface Palette extends CustomPalette {
    }

    interface PaletteOptions extends CustomPalette {
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        green: true;
    }
}