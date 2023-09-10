import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { MRT_ColumnDef } from 'material-react-table';

// date account type kontragent article project deal sum 
// export interface OperationTableFields {
//   date: string, 
//   account: string,
//   type: string,
//   kontragent: string,
//   article: string,
//   project: string,
//   deal: string,
//   sum: {
//     plus: number,
//     minus: number
//   },
// }

// const data: OperationTableFields[] = [
//   {
//     date: "05 июнь 2023",
//     account: "Сбербанк",
//     type: "<",
//     kontragent: "ФСС",
//     article: "Услуги [Доходы]",
//     project: "Кв.7 - Стандарт (План)", 
//     deal: "",
//     sum: {
//       plus: 12500,
//       minus: 12500,
//     },
//   },
//   {
//     date: "05 июнь 2023",
//     account: "Сбербанк",
//     type: "<",
//     kontragent: "ФСС",
//     article: "Услуги [Доходы]",
//     project: "Кв.7 - Стандарт (План)", 
//     deal: "",
//     sum: {
//       plus: 12500,
//       minus: 12500,
//     },
//   },
//   {
//     date: "05 июнь 2023",
//     account: "Сбербанк",
//     type: "<",
//     kontragent: "ФСС",
//     article: "Услуги [Доходы]",
//     project: "Кв.7 - Стандарт (План)", 
//     deal: "",
//     sum: {
//       plus: 12500,
//       minus: 12500,
//     },
//   },
// ]

interface Person {
  name: string;
  age: number;
}

//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const data: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

const OperationTable = () => {

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
      {
        accessorFn: (originalRow) => originalRow.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: <i style={{ color: 'red' }}>Age</i>, //optional custom markup
      },
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection //enable some features
      enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
    />
  )
}

export default OperationTable