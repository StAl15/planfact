import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {FlexColumnStart} from "./FlexColumnStart";
import React, {useState} from "react";
import Label from "./Label";
import {FlexRow} from "./FlexRow";
import { formatRelative } from 'date-fns'
import { es, ru } from 'date-fns/locale'


export const CustomDateRangePicker = () => {
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);

    return (
            <FlexColumnStart>
                <Label>Период</Label>
                <FlexRow className={'justify-between space-x-2'}>
                    <DatePicker format={'DD-MM-YYYY'} value={dateStart}
                                onChange={e => setDateStart(e)} disableFuture={true}
                                className={'w-[11rem]'} sx={{backgroundColor: '#FFF'}}/>
                    <DatePicker format={'DD-MM-YYYY'} value={dateEnd}
                                onChange={e => setDateEnd(e)}
                                disableFuture={true} className={'w-[11rem]'} sx={{backgroundColor: '#FFF'}}/>
                </FlexRow>
            </FlexColumnStart>
    );
};