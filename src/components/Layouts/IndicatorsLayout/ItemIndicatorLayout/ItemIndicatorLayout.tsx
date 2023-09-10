import {SwitchIndicator} from "../SwitchIndicator";
import {IndicatorDashboardLayout} from "../IndicatorDashboard/IndicatorDashboardLayout";
import React, {FC} from "react";

export interface IItemIndicatorLayoutProps {
    name: string,
    options?: {
        name: string;
        id: number;
    }[],
    activeId?: number,
    setActiveId?: (data: any) => void,
    data?: {
        name: string,
        data: any[],
        planValue?: number
    }[],
    hideOptions?: boolean,
    hideHelpers?: boolean,
    sorts?: {
        name: string;
        id: number;
    }[],
    showSorts?: boolean,
    activeSortId?: number,
    setSortId?: (value: any) => void,
    labels: string[];
}

export const ItemIndicatorLayout: FC<IItemIndicatorLayoutProps> = ({
                                                                       labels,
                                                                       hideOptions = false,
                                                                       data,
                                                                       name,
                                                                       options,
                                                                       activeId,
                                                                       setActiveId,
                                                                       hideHelpers = false,
                                                                       sorts,
                                                                       showSorts = false,
                                                                       activeSortId,
                                                                       setSortId
                                                                   }) => {
    return (
        <>
            <SwitchIndicator setActiveSortId={setSortId} activeSortId={activeSortId} showShorts={showSorts}
                             sorts={sorts} hideOptions={hideOptions} name={name}
                             options={options} activeId={activeId}
                             setActiveId={setActiveId}/>
            <IndicatorDashboardLayout labels={labels} hideHelpers={hideHelpers} itemsData={data}/>
        </>
    );
};