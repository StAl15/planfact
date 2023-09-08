import {SwitchIndicator} from "../SwitchIndicator";
import {IndicatorDashboardLayout} from "../IndicatorDashboard/IndicatorDashboardLayout";
import React, {FC} from "react";

export const ItemIndicatorLayout:FC<{name: string}> = ({name}) => {
    return (
        <>
            <SwitchIndicator name={name}/>
            <IndicatorDashboardLayout/>
        </>
    );
};