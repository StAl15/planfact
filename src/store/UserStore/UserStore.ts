import {createContext} from "react";
import {action, autorun, makeAutoObservable} from "mobx";
import {useGetLocalStorage, useSetLocalStorage} from "../../hooks/useLocalStorage";

export interface IUser {

}

class UserStore {
    user: IUser = useGetLocalStorage('user');
    isAuth: boolean = useGetLocalStorage('isAuth');

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
        autorun(() => {
            useSetLocalStorage('user', this.user);
            useSetLocalStorage('isAuth', this.isAuth);
        })
    }

    @action
    setUser(data: IUser) {
        this.user = data;
    }

    @action
    setIsAuth(state: boolean) {
        this.isAuth = state;
    }

    @action
    logout() {
        localStorage.clear();
    }
}

export default createContext(new UserStore())