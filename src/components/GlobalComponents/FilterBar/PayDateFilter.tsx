import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import FilterCaption from './FilterCaption'
import PeriodDatePicker from '../../PrimaryComponents/PeriodDatePicker'

const PayDateFilter = () => {
  return (
    <>
      <FilterCaption name="Дата оплаты" />
      <FormGroup>
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Подтверждена" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Не подтверждена" />
      </FormGroup>
      <PeriodDatePicker isLabel={false} />
    </>
  )
}

export default PayDateFilter