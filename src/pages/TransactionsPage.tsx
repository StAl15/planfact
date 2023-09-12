import {FlexColumn} from "../components/PrimaryComponents/FlexColumn";
import {FlexRow} from "../components/PrimaryComponents/FlexRow";
import Form from "@rjsf/mui";
import validator from '@rjsf/validator-ajv8';
import {
    FIlterTransactionsSchema, FIlterTransactionsUISchema
} from "../components/GlobalComponents/FormSchema/FilterTransactionsSchema/FilterTransactionSchema";
import React, {useEffect, useMemo, useState} from "react";
import {useDebounce} from "../hooks/useDebounce";
import {MaterialReactTable} from "material-react-table";
import {Typography} from "@mui/material";


export const TransactionsPage = () => {
    const [formData, setFormData] = useState(null); //можно установить значения по дефолту или кешированные значения
    const debouncedFormData = useDebounce(formData, 1000);

    useEffect(() => {
        console.log(formData)
    }, [debouncedFormData]);

    const data = [
        {
            date: "John",
            name: 'sdsf',
            client: 'fdsf',
            status: 'fdsfd',
            transactionSum: 342,
            arrived: 324,
            departed: 32423,
            profit: 32424
        },
        {
            date: "John",
            name: 'sdsf',
            client: 'fdsf',
            status: 'fdsfd',
            transactionSum: 342,
            arrived: 324,
            departed: 32423,
            profit: 32424
        },
        {
            date: "John",
            name: 'sdsf',
            client: 'fdsf',
            status: 'fdsfd',
            transactionSum: 342,
            arrived: 324,
            departed: 32423,
            profit: 32424
        },
    ];

    const columns = useMemo(
        () => [
            {
                accessorKey: "date",
                header: "Date",
                Header: <Typography>Дата</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
            {
                accessorKey: "name",
                header: "Name",
                Header: <Typography>Название</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
            {
                accessorKey: "client",
                header: "Сlient",
                Header: <Typography>Клиент</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
            {
                accessorKey: "status",
                header: "Status",
                Header: <Typography>Статус</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
            {
                accessorKey: "transactionSum",
                header: "TransactionSum",
                Header: <Typography>Сумма сделки, ₽</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
            {
                accessorKey: "arrived",
                header: "Arrived",
                Header: <Typography>Поступило</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
            {
                accessorKey: "departed",
                header: "Departed",
                Header: <Typography>Отгружено</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
            {
                accessorKey: "profit",
                header: "Profit",
                Header: <Typography>Прибыль</Typography>,
                Cell: ({ renderedCellValue }) => <Typography>{renderedCellValue}</Typography>
            },
        ],
        []
    );

    return (
        <FlexRow className={'w-full h-full justify-between relative'}>
            <FlexColumn
                className={'bg-[#F7F8F9] h-auto min-h-screen w-1/5 overflow-y-scroll p-4'}>
                <Form
                    onChange={e => setFormData(e.formData)}
                    formData={formData}
                    liveOmit={true}
                    liveValidate={true}
                    schema={FIlterTransactionsSchema}
                    uiSchema={FIlterTransactionsUISchema}
                    validator={validator}/>
            </FlexColumn>

            <FlexColumn className={'w-4/5 h-full p-6'}>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableTopToolbar={false}
                    enableRowSelection //enable some features
                    // enableColumnOrdering={false}
                    // enableGlobalFilter={false}
                    enableColumnActions={false}
                    // enableFullScreenToggle={true}
                    // enableDensityToggle={false}
                    // enableFilters={false}
                    // enableHiding={false}
                />
            </FlexColumn>
        </FlexRow>
    );
};