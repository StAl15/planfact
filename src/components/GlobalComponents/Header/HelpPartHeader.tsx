import {Typography} from "@mui/material";
import {FlexRow} from "../../PrimaryComponents/FlexRow";

export const HelpPartHeader = () => {
    return (
        <FlexRow className={'items-center space-x-4 group/help cursor-pointer'}>
            <Typography fontFamily={'mulish'}>Помощь и обучение</Typography>
            <img className={'group-hover/help:rotate-180'} src={'images/down.svg'}/>
        </FlexRow>
    );
};