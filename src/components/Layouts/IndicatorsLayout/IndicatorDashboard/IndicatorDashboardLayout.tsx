import {FlexColumn} from "../../../PrimaryComponents/FlexColumn";
import {FlexRow} from "../../../PrimaryComponents/FlexRow";
import React, {FC, useEffect} from "react";
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
import {MONTHS} from "../utils";
import {twMerge} from "tw-merge";
import clsx from "clsx";

export interface IIndicatorDashboardLayoutProps {
    itemsData?: {
        name: string,
        data: any[],
        planValue?: number
    }[],
    hideHelpers?: boolean;
    labels: string[];
}

export const IndicatorDashboardLayout: FC<IIndicatorDashboardLayoutProps> = ({labels, itemsData, hideHelpers = false}) => {
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

    const data = {
        labels: labels,
        datasets: itemsData?.map((it, idx) => {
            return {
                label: it.name,
                data: it.data,
            }
        }),
    };


    return (
        <FlexRow className={'space-x-10 justify-between w-full items-start'}>
            {!hideHelpers && <FlexColumn className={'w-1/3 space-y-6'}>
                {itemsData?.map((it, idx) =>
                    <IndicatorItem name={it.name} currentValue={it.data.at(-1)} planValue={it.planValue}/>
                )}
            </FlexColumn>}
            <FlexColumn className={twMerge(clsx('bg-white h-full rounded-lg p-4', hideHelpers ? 'w-full' : 'w-2/3'))}>
                <Bar className={'w-full h-full'} options={options} data={data}/>
            </FlexColumn>
        </FlexRow>
    );
};