import { FC } from 'react'
import FilterHeader from './FilterHeader'
import { FlexColumn } from '../../PrimaryComponents/FlexColumn'
import OperationTypeFilter from './OperationTypeFilter'
import PayDateFilter from './PayDateFilter'
import { LocalizationProvider } from "@mui/x-date-pickers-pro"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import ProfitDateFilter from './ProfitDateFilter'
import OptionsFilter from './OptionsFilter'

const FilterComponent: FC = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='py-[20px] font-mulish'>
          <FilterHeader filterCount={6} />
          <FlexColumn>
            <OperationTypeFilter />
            <PayDateFilter />
            <ProfitDateFilter />
            <OptionsFilter />
          </FlexColumn>
        </div>
      </LocalizationProvider>
    </>
  )
}

export default FilterComponent