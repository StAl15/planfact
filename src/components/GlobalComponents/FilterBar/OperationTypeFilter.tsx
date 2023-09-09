import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import FilterCaption from './FilterCaption'

const OperationTypeFilter = () => {
  return (
    <>
      <FilterCaption name='Тип операции' />
      <FormGroup>
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Поступление" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Выплата" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Перемещение" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Списание" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Зачисление" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Начисление" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Отгрузка" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Поставка" />
      </FormGroup>
    </>
  )
}

export default OperationTypeFilter