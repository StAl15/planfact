import {FlexColumn} from "../components/PrimaryComponents/FlexColumn";
import {FiltersIndicators} from "../components/Layouts/IndicatorsLayout/FiltersIndicators";
import {FlexRow} from "../components/PrimaryComponents/FlexRow";
import {Button, IconButton, Typography} from "@mui/material";
import React from "react";
import {SwitchIndicator} from "../components/Layouts/IndicatorsLayout/SwitchIndicator";
import {
    IndicatorDashboardLayout
} from "../components/Layouts/IndicatorsLayout/IndicatorDashboard/IndicatorDashboardLayout";
import {ItemIndicatorLayout} from "../components/Layouts/IndicatorsLayout/ItemIndicatorLayout/ItemIndicatorLayout";

export const IndicatorsPage = () => {
    return (
        <FlexColumn className={'w-full h-full space-y-4'}>
            <FiltersIndicators/>
            <FlexColumn className={'space-y-10'}>
                <ItemIndicatorLayout/>
                <ItemIndicatorLayout/>
                <ItemIndicatorLayout/>
                <ItemIndicatorLayout/>
            </FlexColumn>


        </FlexColumn>
    );
};