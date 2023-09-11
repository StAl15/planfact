import {format} from "date-fns";
import {ru} from "date-fns/locale";

export const useFormatDate = (date: number | Date, formatting: string) => format(date, formatting, {locale: ru})