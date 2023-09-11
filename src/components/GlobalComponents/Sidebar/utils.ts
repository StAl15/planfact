import {IndicatorsPage} from "../../../pages/IndicatorsPage";
import {OperationsPage} from "../../../pages/OperationsPage";
import {TransactionsPage} from "../../../pages/TransactionsPage";

export const PRIVATE_ROUTES = [
    {
        icon: 'images/indicators.svg',
        title: 'Показатели',
        path: '/indicators',
        element: IndicatorsPage
    },
    {
        icon: 'images/operations.svg',
        title: 'Операции',
        path: '/operations',
        element: OperationsPage
    },
    {
        icon: 'images/transactions.svg',
        title: 'Сделки',
        path: '/transactions',
        element: TransactionsPage
    },
    {
        icon: 'images/plan.svg',
        title: 'План',
        path: '/plan'
    },
    {
        icon: 'images/projects.svg',
        title: 'Проекты',
        path: '/projects'
    },
    {
        icon: 'images/stats.svg',
        title: 'Отчеты',
        path: '/stats'
    },
    {
        icon: 'images/library.svg',
        title: 'Справочники',
        path: '/library'
    },
    {
        icon: 'images/settings.svg',
        title: 'Настройки',
        path: '/settings'
    },
]