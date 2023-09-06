import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import {ThemeProvider} from "@mui/material";
import {DEFAULT_THEME} from "./MUIconfig";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={DEFAULT_THEME}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
