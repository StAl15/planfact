import {FlexRow} from "../../PrimaryComponents/FlexRow";
import {Button, Typography} from "@mui/material";
import {HelpPartHeader} from "./HelpPartHeader";
import {BalancePartHeader} from "./BalancePartHeader";
import {MailPartComponent} from "./MailPartComponent";

export const HeaderComponent = () => {
    return (
        <FlexRow className={'fixed top-0 left-0 w-screen h-[5rem] justify-center bg-white shadow-headerShadow p-6 z-10'}>
            <FlexRow className={'w-[80rem] items-center justify-evenly'}>
                <HelpPartHeader/>
                <BalancePartHeader/>
                <MailPartComponent/>
                <Button sx={{outline: 'none', borderRadius: '100px'}} variant={'outlined'}>
                    <Typography fontFamily={'mulish'} fontSize={'0.875rem'} fontWeight={800}>
                        Тарифы и оплата
                    </Typography>
                </Button>
            </FlexRow>

        </FlexRow>
    );
};