import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import {GlobalWrapper} from "./components/PrimaryComponents/GlobalWrapper";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import UserStore from "./store/UserStore/UserStore";
import {HomePage} from "./pages/HomePage";

const App = () => {
    const UserStorage = useContext(UserStore);
    return (
        <GlobalWrapper>
            <BrowserRouter>
                {UserStorage.isAuth
                    ? <Routes>
                        <Route path={'/home'} element={<HomePage/>}/>
                        <Route path={'/*'} element={<Navigate to={'/home'} replace={true}/>}/>
                    </Routes>
                    : <Routes>
                        <Route path={'/login'} element={<LoginPage/>}/>
                        <Route path={'/signup'} element={<SignUpPage/>}/>
                        <Route path={'/*'} element={<Navigate to={'/login'} replace={true}/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </GlobalWrapper>

    )
}

export default observer(App)
