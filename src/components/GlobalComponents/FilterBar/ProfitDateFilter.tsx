import React from 'react'
import FilterCaption from './FilterCaption'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import PeriodDatePicker from '../../PrimaryComponents/PeriodDatePicker'

const ProfitDateFilter = () => {
  return (
    <>
      <FilterCaption name="Дата начисления" />
        <FormGroup>
          <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Подтверждена" />
          <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Не подтверждена" />
        </FormGroup>
      <PeriodDatePicker isLabel={true} />
    </>
  )
}

export default ProfitDateFilter