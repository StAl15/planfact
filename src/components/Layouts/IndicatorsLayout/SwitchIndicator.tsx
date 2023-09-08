import {FlexRow} from "../../PrimaryComponents/FlexRow";
import {Button, IconButton, Typography} from "@mui/material";
import React from "react";

export const SwitchIndicator = () => {
    return (
        <FlexRow className={'space-x-10 py-4 border-b-[1px] border-b-[#C7C7CF] -mt-4 w-full items-center'}>
            <FlexRow className={'items-center space-x-2'}>
                <Typography fontWeight={600} fontSize={'1.375rem'} fontFamily={'mulish'}>
                    Прибыль, ₽
                </Typography>
                <IconButton>
                    <img src={'images/octicon_question-24.svg'}/>
                </IconButton>
            </FlexRow>
            <FlexRow className={'items-center space-x-2'}>
                <Button sx={{paddingY: 1}} variant={'outlined'}>
                    <Typography fontFamily={'mulish'} fontSize={'0.875rem'}>
                        Метод начисления
                    </Typography>
                </Button>
                <Button color={'secondary'} sx={{paddingY: 1}} variant={'outlined'}>
                    <Typography fontFamily={'mulish'} fontSize={'0.875rem'}>
                        Кассовый метод
                    </Typography>
                </Button>
                <IconButton>
                    <img src={'images/octicon_question-24.svg'}/>
                </IconButton>
            </FlexRow>
        </FlexRow>
    );
};