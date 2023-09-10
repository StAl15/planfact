import {CSSProperties, FC, ReactNode, useContext} from "react";
import {FlexColumn} from "./FlexColumn";
import {twMerge} from "tw-merge";
import clsx from "clsx";
import {HeaderComponent} from "../GlobalComponents/Header/HeaderComponent";
import {FlexRow} from "./FlexRow";
import {SidebarComponent} from "../GlobalComponents/Sidebar/SidebarComponent";
import {observer} from "mobx-react-lite";
import UserStore from "../../store/UserStore/UserStore";

export interface IGlobalWrapperProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const GlobalWrapper: FC<IGlobalWrapperProps> = (props) => {
    const UserStorage = useContext(UserStore);

    return (
        <FlexColumn
            style={props.style}
            className={twMerge(clsx('w-screen h-screen bg-[#EEEEEE] overflow-auto', props.className))}>
            {UserStorage.isAuth && <HeaderComponent/>}
            <FlexRow className={'justify-between'}>
                {UserStorage.isAuth && <SidebarComponent/>}
                <FlexColumn className={UserStorage.isAuth && 'mt-[5rem] ml-[7.5rem] p-6 w-full overflow-auto'}>
                    {props.children}
                </FlexColumn>

            </FlexRow>

        </FlexColumn>
    );
};

export default observer(GlobalWrapper);