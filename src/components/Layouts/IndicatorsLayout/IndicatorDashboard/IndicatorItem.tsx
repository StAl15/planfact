import {Typography} from "@mui/material";
import {FlexColumn} from "../../../PrimaryComponents/FlexColumn";
import {FlexRow} from "../../../PrimaryComponents/FlexRow";
import React, {FC} from "react";

export const IndicatorItem: FC<{ name: string }> = ({name}) => {
    return (
        <FlexRow className={'justify-between w-full items-center'}>
            <Typography fontSize={'1rem'} fontWeight={400} fontFamily={'mulish'}>{name}</Typography>
            <FlexColumn>
                <Typography textAlign={'right'} fontSize={'1.75rem'} fontWeight={400} fontFamily={'mulish'}>2
                    500 000</Typography>
                <Typography textAlign={'right'} fontSize={'0.75rem'} fontWeight={400} fontFamily={'mulish'}
                            color={'secondary.light'}>
                    <span className={'text-accent'}>7 800 000.00</span>
                    - по плану
                </Typography>
            </FlexColumn>
        </FlexRow>
    );
};