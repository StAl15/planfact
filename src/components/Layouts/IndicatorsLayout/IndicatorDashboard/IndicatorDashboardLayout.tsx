import {FlexColumn} from "../../../PrimaryComponents/FlexColumn";
import {FlexRow} from "../../../PrimaryComponents/FlexRow";
import React from "react";
import {IndicatorItem} from "./IndicatorItem";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {faker} from "@faker-js/faker";

export const IndicatorDashboardLayout = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'График прибыли',
            },
        },
    };

    const labels = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Ноябрь',
        'Декабрь',
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Доходы',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Расходы',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                hidden: true,
            },
            {
                label: 'Чистая прибыль',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                borderColor: 'green',
                backgroundColor: 'green',
                hidden: true
            },
            {
                label: 'Рентабельность, %',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                hidden: true
            },
            {
                label: 'Дивиденды',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                borderColor: 'pink',
                backgroundColor: 'pink',
                hidden: true
            },
        ],
    };

    return (
        <FlexRow className={'space-x-10 justify-between w-full items-start'}>
            <FlexColumn className={'w-1/3 space-y-6'}>
                <IndicatorItem name={'Доходы'}/>
                <IndicatorItem name={'Расходы'}/>
                <IndicatorItem name={'Чистая прибыль'}/>
                <IndicatorItem name={'Рентабельность, %'}/>
                <IndicatorItem name={'Дивиденды'}/>
            </FlexColumn>
            <FlexColumn className={'w-2/3 bg-white h-full rounded-lg p-4'}>
                <Bar className={'w-full'} options={options} data={data}/>
            </FlexColumn>
        </FlexRow>
    );
};