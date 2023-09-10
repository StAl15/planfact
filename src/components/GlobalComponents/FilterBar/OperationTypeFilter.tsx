import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import FilterCaption from './FilterCaption'

const OperationTypeFilter = () => {
  return (
    <>
      <FilterCaption name='Тип операции' />
      <FormGroup style={{fontFamily: 'Mulish'}}>
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Поступление" />
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Выплата" />
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Перемещение" />
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Списание" />
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Зачисление" />
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Начисление" />
        <FormControlLabel sx={{marginBottom: "-15px"}} control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Отгрузка" />
        <FormControlLabel control={<Checkbox size="medium" sx={{ color: "#8B91A1" }} />} label="Поставка" />
      </FormGroup>
    </>
  )
}

export default OperationTypeFilter