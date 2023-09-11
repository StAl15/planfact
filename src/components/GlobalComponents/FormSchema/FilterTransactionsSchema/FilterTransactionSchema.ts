import {RJSFSchema, UiSchema} from "@rjsf/utils";

export const FIlterTransactionsSchema: RJSFSchema = {
    type: "object",
    title: 'Параметры сделки',
    properties: {
        transactionStatus: {
            type: "string",
            title: "Статус сделки",
            enum: [
                "Завершен",
                "В работе",
                "Отклонена"
            ],
        },
        clients: {
            type: "string",
            title: "Клиенты",
            enum: [
                "Антонов П.",
                "Мизеев П.",
                "Русов П.",
            ],
        },
        dateCreation: {
            type: "string",
            format: "date-time",
            title: "Дата создания"
        },
        transactionSum: {
            type: 'object',
            title: 'Сумма сделки',
            properties: {
                minSum: {
                    type: 'number',
                    title: 'от'
                },
                maxSum: {
                    type: 'number',
                    title: 'до'
                }
            }
        },
        profitTransaction: {
            type: 'object',
            title: 'Прибыль от сделки',
            properties: {
                minSum: {
                    type: 'number',
                    title: 'от'
                },
                maxSum: {
                    type: 'number',
                    title: 'до'
                }
            }
        },
    },
};

export const FIlterTransactionsUISchema: UiSchema = {
    firstName: {
        'ui:placeholder': 'Some...',
    },
    transactionSum: {
        'ui:options': {
            inline: true,
        },
    },
    "ui:submitButtonOptions": {
        norender: true
    }
};