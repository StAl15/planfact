import {Typography} from "@mui/material";
import {FlexColumn} from "../../../PrimaryComponents/FlexColumn";
import {FlexRow} from "../../../PrimaryComponents/FlexRow";
import React, {FC} from "react";

export const IndicatorItem: FC<{ name: string, currentValue: number, planValue: number }> = ({
                                                                                                  name,
                                                                                                  currentValue,
                                                                                                  planValue
                                                                                              }) => {
    return (
        <FlexRow className={'justify-between w-full items-center'}>
            <Typography fontSize={'1rem'} fontWeight={400} fontFamily={'mulish'}>{name}</Typography>
            <FlexColumn>
                <Typography textAlign={'right'} fontSize={'1.75rem'} fontWeight={400} fontFamily={'mulish'}>
                    {currentValue}
                </Typography>
                <Typography textAlign={'right'} fontSize={'0.75rem'} fontWeight={400} fontFamily={'mulish'}
                            color={'secondary.light'}>
                    <span className={'text-accent'}>{planValue}</span>
                    - по плану
                </Typography>
            </FlexColumn>
        </FlexRow>
    );
};