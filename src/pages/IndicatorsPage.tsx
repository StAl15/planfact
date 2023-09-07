import {FlexColumn} from "../components/PrimaryComponents/FlexColumn";
import {FiltersIndicators} from "../components/Layouts/IndicatorsLayout/FiltersIndicators";
import {FlexRow} from "../components/PrimaryComponents/FlexRow";

export const IndicatorsPage = () => {
    return (
        <FlexColumn className={'w-full h-full'}>
            <FiltersIndicators/>
            <FlexRow>

            </FlexRow>
        </FlexColumn>
    );
};