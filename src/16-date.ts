import { subDays, format } from "date-fns";

const date = new Date(1994, 7, 12);

const respuesta = subDays(date, 10);

const formatResult = format(respuesta, "yyyy-MM-dd");

console.log(formatResult);
