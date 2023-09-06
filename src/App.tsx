import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import {GlobalWrapper} from "./components/PrimaryComponents/GlobalWrapper";

const App = () => {
    return (
        <GlobalWrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/signup'} element={<SignUpPage/>}/>
                    <Route path={'/*'} element={<Navigate to={'/login'} replace={true}/>}/>

                </Routes>
            </BrowserRouter>
        </GlobalWrapper>

    )
}

export default App
