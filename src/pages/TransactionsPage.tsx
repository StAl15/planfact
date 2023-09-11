import {FlexColumn} from "../components/PrimaryComponents/FlexColumn";
import {FlexRow} from "../components/PrimaryComponents/FlexRow";
import Form from "@rjsf/mui";
import validator from '@rjsf/validator-ajv8';
import {
    FIlterTransactionsSchema, FIlterTransactionsUISchema
} from "../components/GlobalComponents/FormSchema/FilterTransactionsSchema/FilterTransactionSchema";
import {useEffect, useState} from "react";


export const TransactionsPage = () => {
    const [formData, setFormData] = useState(null); //можно установить значения по дефолту или кешированные значения

    return (
        <FlexRow className={'w-full h-full justify-between relative'}>
            <FlexColumn
                className={'bg-[#F7F8F9] h-screen w-[15rem] fixed left-0 top-0 mt-[5rem] ml-[7.5rem] overflow-y-scroll p-4 pb-[5rem]'}>
                <Form onChange={e => setFormData(e.formData)} formData={formData} liveOmit={true} liveValidate={true}
                      schema={FIlterTransactionsSchema} uiSchema={FIlterTransactionsUISchema} validator={validator}/>
            </FlexColumn>

            <FlexColumn>

            </FlexColumn>
        </FlexRow>
    );
};