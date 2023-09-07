import {FlexRow} from "../../PrimaryComponents/FlexRow";
import {Typography} from "@mui/material";
import {FlexColumn} from "../../PrimaryComponents/FlexColumn";

export const MailPartComponent = () => {
    return (
        <FlexColumn>
            <FlexRow className={'items-center group/mail space-x-4 cursor-pointer'}>
                <Typography fontFamily={'mulish'}>demo-guest@mail.ru</Typography>
                <img className={'group-hover/mail:rotate-180'} src={'images/down.svg'}/>
            </FlexRow>
            <Typography color={'secondary.light'} fontFamily={'mulish'}>
                Подписка активна
            </Typography>
        </FlexColumn>
    );
};