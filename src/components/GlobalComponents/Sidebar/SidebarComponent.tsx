import {FlexColumn} from "../../PrimaryComponents/FlexColumn";
import {PRIVATE_ROUTES} from "./utils";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const SidebarComponent = () => {

    return (
        <FlexColumn className={'w-[7.5rem] h-screen overflow-y-scroll pb-20 mt-[5rem] fixed left-0 top-0 bg-dark'}>
            {PRIVATE_ROUTES.map((it) =>
                <Link key={it.path} to={it.path} className={'cursor-pointer hover:bg-[#323638] py-6 space-y-2 border-t-white border-t-[1px] border-t-solid flex flex-col items-center'}>
                    <img src={it.icon}/>
                    <Typography color={'white'}>{it.title}</Typography>
                </Link>
            )}
        </FlexColumn>
    );
};