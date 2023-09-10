import {FlexRow} from "../../PrimaryComponents/FlexRow";
import {Button, IconButton, Typography} from "@mui/material";
import React, {FC} from "react";

export interface ISwitchIndicatorProps {
    name: string,
    options?: {
        name: string;
        id: number;
    }[],
    activeId: number,
    setActiveId: (data: any) => void,
    hideOptions?: boolean,
    showShorts?: boolean,
    sorts?: {
        name: string;
        id: number;
    }[],
    setActiveSortId?: (data: any) => void,
    activeSortId: number
}

export const SwitchIndicator: FC<ISwitchIndicatorProps> = ({
                                                               hideOptions = false,
                                                               name,
                                                               options,
                                                               activeId,
                                                               setActiveId,
                                                               showShorts = false,
                                                               sorts,
                                                               setActiveSortId,
                                                               activeSortId
                                                           }) => {
    return (
        <FlexRow className={'space-x-10 py-4 border-b-[1px] border-b-[#C7C7CF] -mt-4 w-full items-center'}>
            <FlexRow className={'items-center space-x-2'}>
                <Typography fontWeight={600} fontSize={'1.375rem'} fontFamily={'mulish'}>
                    {name}, ₽
                </Typography>
                <IconButton>
                    <img src={'images/octicon_question-24.svg'}/>
                </IconButton>
            </FlexRow>
            {!hideOptions && <FlexRow className={'items-center space-x-2'}>
                {options?.map((it, idx) =>
                    <Button
                        onClick={(e) => setActiveId(idx)}
                        color={it.id === activeId ? 'primary' : 'secondary'}
                        sx={{paddingY: 1, fontSize: '1rem'}}
                        variant={'outlined'}>
                        <Typography fontFamily={'mulish'} fontSize={'0.855rem'}>
                            {it.name}
                        </Typography>
                    </Button>
                )}
                <IconButton>
                    <img src={'images/octicon_question-24.svg'}/>
                </IconButton>
            </FlexRow>}
            {showShorts && <FlexRow className={'self-end items-center space-x-2'}>
                {sorts?.map((it, idx) =>
                    <Button
                        onClick={(e) => setActiveSortId(idx)}
                        color={it.id === activeSortId ? 'primary' : 'secondary'}
                        sx={{paddingY: 1}}
                        variant={'outlined'}>
                        <Typography fontFamily={'mulish'} fontSize={'0.855rem'}>
                            {it.name}
                        </Typography>
                    </Button>
                )}
                <IconButton>
                    <img src={'images/octicon_question-24.svg'}/>
                </IconButton>
            </FlexRow>}
        </FlexRow>
    );
};