import React from 'react'
import FilterCaption from './FilterCaption'
import { MenuItem, Select, TextField } from '@mui/material'
import Label from '../../PrimaryComponents/Label'

const OptionsFilter = () => {
  return (
    <>
      <FilterCaption name="Параметры" />
      <div className="flex flex-col gap-y-[5px]">
        <Select
          sx={{ backgroundColor: '#FFF', width: "100%" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={0}
        >
          <MenuItem value={0}>Юр.лица и счета</MenuItem>
          <MenuItem value={1}>По дням</MenuItem>
          <MenuItem value={2}>По кварталам</MenuItem>
        </Select>
        <Select
          sx={{ backgroundColor: '#FFF', width: "100%" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={0}
        >
          <MenuItem value={0}>Контрагенты</MenuItem>
          <MenuItem value={1}>По дням</MenuItem>
          <MenuItem value={2}>По кварталам</MenuItem>
        </Select>
        <Select
          sx={{ backgroundColor: '#FFF', width: "100%" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={0}
        >
          <MenuItem value={0}>Статьи учета</MenuItem>
          <MenuItem value={1}>По дням</MenuItem>
          <MenuItem value={2}>По кварталам</MenuItem>
        </Select>
        <Select
          sx={{ backgroundColor: '#FFF', width: "100%" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={0}
        >
          <MenuItem value={0}>Проекты</MenuItem>
          <MenuItem value={1}>По дням</MenuItem>
          <MenuItem value={2}>По кварталам</MenuItem>
        </Select>
        <Select
          sx={{ backgroundColor: '#FFF', width: "100%" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={0}
        >
          <MenuItem value={0}>Сделки</MenuItem>
          <MenuItem value={1}>По дням</MenuItem>
          <MenuItem value={2}>По кварталам</MenuItem>
        </Select>
        <Label>от</Label>
        <div className="flex gap-x-[10px] items-center">
          <TextField sx={{ backgroundColor: "#fff" }} placeholder="500">0</TextField>
          <p>-</p>
          <TextField sx={{ backgroundColor: "#fff" }} placeholder="10000">1</TextField>
        </div>
      </div>
    </>
  )
}

export default OptionsFilter