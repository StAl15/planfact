import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import GlobalWrapper from "./components/PrimaryComponents/GlobalWrapper";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import UserStore from "./store/UserStore/UserStore"; 
import {PRIVATE_ROUTES} from "./components/GlobalComponents/Sidebar/utils";

const App = () => {
    const UserStorage = useContext(UserStore);
    return (
        <BrowserRouter>
            <GlobalWrapper>
                {UserStorage.isAuth
                    ? <Routes>
                        {PRIVATE_ROUTES.map(it =>
                            <Route key={it.path} path={it.path} element={<it.element/>}/>
                        )}
                        <Route path={'/*'} element={<Navigate to={'/indicators'} replace={true}/>}/>
                    </Routes>
                    : <Routes>
                        <Route path={'/login'} element={<LoginPage/>}/>
                        <Route path={'/signup'} element={<SignUpPage/>}/>
                        <Route path={'/*'} element={<Navigate to={'/login'} replace={true}/>}/>
                    </Routes>
                }
            </GlobalWrapper>
        </BrowserRouter>

    )
}

export default observer(App)
