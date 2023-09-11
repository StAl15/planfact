import {FlexColumn} from "../../PrimaryComponents/FlexColumn";
import {IconButton, MenuItem, Select, Typography} from "@mui/material";
import {FlexRow} from "../../PrimaryComponents/FlexRow";
import Label from "../../PrimaryComponents/Label";
import React from "react";
import {CustomDateRangePicker} from "../../PrimaryComponents/CustomDateRangePicker";

export const FiltersIndicators = () => {

    return (
        <FlexRow className={'w-full border-b-[1px] border-b-[#C7C7CF] pb-4 justify-between items-center'}>

            <FlexColumn className={'w-[16.25rem]'}>
                <Typography fontWeight={800} fontSize={'1.5rem'} fontFamily={'mulish'}>НАЗВАНИЕ
                    КОМПАНИИ</Typography>
                <Typography color={'secondary.light'} fontSize={'1rem'} fontFamily={'mulish'}>сентября 2023
                    года,
                    вторник</Typography>
            </FlexColumn>

            <FlexRow className={'items-end space-x-4'}>
                <CustomDateRangePicker/>
                <FlexColumn>
                    <Label>Отображение</Label>
                    <Select
                        sx={{backgroundColor: '#FFF'}}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={0}
                    >
                        <MenuItem value={0}>По месяцам</MenuItem>
                        <MenuItem value={1}>По дням</MenuItem>
                        <MenuItem value={2}>По кварталам</MenuItem>
                    </Select>
                </FlexColumn>
                <Select
                    sx={{backgroundColor: '#FFF'}}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={0}
                >
                    <MenuItem value={0}>Юр.лица и счета</MenuItem>
                    <MenuItem value={1}>По дням</MenuItem>
                    <MenuItem value={2}>По кварталам</MenuItem>
                </Select>
                <Select
                    sx={{backgroundColor: '#FFF'}}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={0}
                >
                    <MenuItem value={0}>Проекты</MenuItem>
                    <MenuItem value={1}>По дням</MenuItem>
                    <MenuItem value={2}>По кварталам</MenuItem>
                </Select>
                <Select
                    sx={{backgroundColor: '#FFF'}}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={0}
                >
                    <MenuItem value={0}>Сделки</MenuItem>
                    <MenuItem value={1}>По дням</MenuItem>
                    <MenuItem value={2}>По кварталам</MenuItem>
                </Select>
                <IconButton className={'self-center'}>
                    <img src={'images/cancel.svg'}/>
                </IconButton>
            </FlexRow>

        </FlexRow>
    );
};