import {FlexRow} from "../../PrimaryComponents/FlexRow";
import {Typography} from "@mui/material";
import {FlexColumn} from "../../PrimaryComponents/FlexColumn";

export const BalancePartHeader = () => {
    return (
        <FlexColumn>
            <FlexRow className={'items-center space-x-4 group/balance cursor-pointer'}>
                <Typography fontFamily={'mulish'}>На счетах 491 300.00 ₽</Typography>
                <img className={'group-hover/balance:rotate-180'} src={'images/down.svg'}/>
            </FlexRow>
            <Typography color={'primary'} fontFamily={'mulish'}>Разрыв с 28.08.23 по 09.09.23</Typography>
        </FlexColumn>
    );
};