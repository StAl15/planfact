import {FlexColumn} from "../components/PrimaryComponents/FlexColumn";
import {FiltersIndicators} from "../components/Layouts/IndicatorsLayout/FiltersIndicators";
import React, {useState} from "react";
import {ItemIndicatorLayout} from "../components/Layouts/IndicatorsLayout/ItemIndicatorLayout/ItemIndicatorLayout";
import {CLIENTS, MONTHS, PROJECTS} from "../components/Layouts/IndicatorsLayout/utils";
import {faker} from "@faker-js/faker";

export const IndicatorsPage = () => {
    const [activeProfitOption, setActiveProfitOption] = useState(0);
    const [activeCashFlowOption, setActiveCashFlowOption] = useState(0);
    const [activePaymentStructureOption, setActivePaymentStructureOption] = useState(0);
    const [mostProfitClientsOption, setMostProfitClientsOption] = useState(0);
    const [profitProjectsOptions, setProfitProjectsOptions] = useState(0);
    const [sortProfitPropjectOption, setSortProfitPropjectOption] = useState(0);

    return (
        <FlexColumn className={'w-full h-full space-y-4 p-6'}>
            <FiltersIndicators/>
            <FlexColumn className={'space-y-10'}>
                <ItemIndicatorLayout
                    labels={MONTHS}
                    name={"Прибыль"}
                    options={[
                        {
                            name: 'Метод начисления',
                            id: 0
                        }, {
                            name: 'Кассовый метод',
                            id: 1
                        },
                    ]}
                    data={
                        [
                            {
                                name: 'Доходы',
                                data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                                planValue: 7_800_000.00
                            },
                            {
                                name: 'Расходы',
                                data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                                planValue: 7_800_000.00
                            },
                            {
                                name: 'Чистая прибыль',
                                data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                                planValue: 7_800_000.00
                            },
                            {
                                name: 'Рентабельность, %',
                                data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                                planValue: 7_800_000.00
                            },
                            {
                                name: 'Дивиденды',
                                data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                                planValue: 7_800_000.00
                            },
                        ]}
                    activeId={activeProfitOption}
                    setActiveId={setActiveProfitOption}/>
                <ItemIndicatorLayout labels={MONTHS} name={"Денежный поток"} data={[
                    {
                        name: 'Поступления',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                    {
                        name: 'Выплаты',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                    {
                        name: 'Разница',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                ]} options={[
                    {
                        name: 'Общий',
                        id: 0
                    }, {
                        name: 'Операционный',
                        id: 1
                    },
                    {
                        name: 'Инвестиционный',
                        id: 2
                    },
                    {
                        name: 'Финансовый',
                        id: 3
                    },
                ]} activeId={activeCashFlowOption} setActiveId={setActiveCashFlowOption}/>
                <ItemIndicatorLayout labels={MONTHS} data={[
                    {
                        name: 'Поступления',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                    {
                        name: 'Выплаты',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                    {
                        name: 'Разница',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                ]} hideOptions={true} hideHelpers={true} name={'Остатки на счетах'}/>
                <ItemIndicatorLayout labels={MONTHS} data={[
                    {
                        name: 'Доходы',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                    },
                    {
                        name: 'Расходы',
                        data: MONTHS.map(() => faker.number.int({min: -1000, max: 1000})),
                    },
                ]} options={[
                    {
                        name: 'Доходы и расходы',
                        id: 0
                    }, {
                        name: 'Поступления и выплаты',
                        id: 1
                    },
                ]}
                                     hideHelpers={true}
                                     activeId={activePaymentStructureOption}
                                     setActiveId={setActivePaymentStructureOption}
                                     name={"Структура платежей"}/>
                <ItemIndicatorLayout labels={CLIENTS} data={[
                    {
                        name: 'Клиенты',
                        data: CLIENTS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                ]} options={[
                    {
                        name: 'Метод начисления',
                        id: 0
                    }, {
                        name: 'Кассовый метод',
                        id: 1
                    },
                ]}
                                     hideHelpers={true}
                                     activeId={mostProfitClientsOption}
                                     setActiveId={setMostProfitClientsOption}
                                     name={'Самые доходные клиенты'}/>
                <ItemIndicatorLayout labels={PROJECTS} data={[
                    {
                        name: 'Проекты',
                        data: PROJECTS.map(() => faker.number.int({min: -1000, max: 1000})),
                        planValue: 7_800_000.00
                    },
                ]} options={[
                    {
                        name: 'Метод начисления',
                        id: 0
                    }, {
                        name: 'Кассовый метод',
                        id: 1
                    },
                ]}
                                     sorts={[
                                         {
                                             name: 'Сортировка по прибыли',
                                             id: 0
                                         }, {
                                             name: 'По рентабельности',
                                             id: 1
                                         },
                                     ]}
                                     showSorts={true}
                                     hideHelpers={true}
                                     activeId={profitProjectsOptions}
                                     setActiveId={setProfitProjectsOptions}
                                     activeSortId={sortProfitPropjectOption}
                                     setSortId={setSortProfitPropjectOption}
                                     name={'Прибыльность проктов'}/>
            </FlexColumn>


        </FlexColumn>
    );
};