import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { MRT_ColumnDef } from 'material-react-table';

import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import SyncAltIcon from '@mui/icons-material/SyncAlt';


// interface TableHeadersProps {
//   date: string,
//   account: string,
//   type: React.ReactNode,
//   kontragent: string,
//   article: string,
//   project?: string,
//   deal?: string,
//   sum: number,
// }

// const data: TableHeadersProps[] = [
//   {
//     date: "05 июнь 2023",
//     account: "Сбербанк",
//     type: <EastIcon style={{ color: "#da1c1c" }} />,
//     kontragent: "[Начисления]",
//     article: "Услуги [Доходы]",
//     project: "",
//     deal: "",
//     sum: 12500
//   },
//   {
//     date: "05 июнь 2023",
//     account: "Сбербанк",
//     type: <WestIcon style={{ color: "#27ae60" }} />,
//     kontragent: "[Начисления]",
//     article: "Услуги [Доходы]",
//     project: "",
//     deal: "",
//     sum: 12500
//   },
//   {
//     date: "05 июнь 2023",
//     account: "Сбербанк",
//     type: <SyncAltIcon style={{ color: "#8b91a1" }} />,
//     kontragent: "[Начисления]",
//     article: "Услуги [Доходы]",
//     project: "",
//     deal: "",
//     sum: 12500
//   },
// ];

const OperationTable = () => {

  // const columns = useMemo<MRT_ColumnDef<TableHeadersProps>[]>(
  //   () => [
  //     {
  //       accessorKey: 'date',
  //       header: 'Дата',
  //       muiTableHeadCellProps: { sx: { color: '#000', fontWeight: 400, fontSize: "16px" } },
  //     },
  //     {
  //       accessorKey: 'account',
  //       header: 'Счет',
  //       muiTableHeadCellProps: { sx: { color: '#8B91A1', fontWeight: 400, fontSize: "16px" } },
  //     },
  //     {
  //       accessorKey: 'type',
  //       header: 'Тип',
  //       muiTableHeadCellProps: { sx: { color: '#8B91A1', fontWeight: 400, fontSize: "16px" } },
  //     },
  //     {
  //       accessorKey: 'kontragent',
  //       header: 'Контрагент',
  //       muiTableHeadCellProps: { sx: { color: '#8B91A1', fontWeight: 400, fontSize: "16px" } },
  //     },
  //     {
  //       accessorKey: 'article',
  //       header: 'Статья',
  //       muiTableHeadCellProps: { sx: { color: '#8B91A1', fontWeight: 400, fontSize: "16px" } },
  //     },
  //     {
  //       accessorKey: 'project',
  //       header: 'Проект',
  //       muiTableHeadCellProps: { sx: { color: '#8B91A1', fontWeight: 400, fontSize: "16px" } },
  //     },
  //     {
  //       accessorKey: 'deal',
  //       header: 'Сделка',
  //       muiTableHeadCellProps: { sx: { color: '#8B91A1', fontWeight: 400, fontSize: "16px" } },
  //     },
  //     {
  //       accessorKey: 'sum',
  //       header: 'Сумма',
  //       muiTableHeadCellProps: { sx: { color: '#8B91A1', fontWeight: 400, fontSize: "16px" } },
  //     },

  //   ],
  //   [],
  // );

  return (
    // <MaterialReactTable
    //   columns={columns}
    //   data={data}
    //   enableRowSelection //enable some features
    //   enableColumnOrdering={false}
    //   enableGlobalFilter={false}
    //   enableColumnActions={false}
    //   enableFullScreenToggle={false}
    //   enableDensityToggle={false}
    //   enableFilters={false}
    //   enableHiding={false}
    // />
    <></>
  )
}

export default OperationTable