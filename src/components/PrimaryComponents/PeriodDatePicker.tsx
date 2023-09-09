import React, { FC } from 'react'
import { FlexRow } from './FlexRow'
import Label from './Label'
import { IconButton } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

export interface PeriodDatePickerProps {
  isLabel: boolean
}

const PeriodDatePicker: FC<PeriodDatePickerProps> = (props) => {
  return (
    <>
      {props.isLabel &&
        <FlexRow style={{ alignItems: "center" }}>
          <Label>Период</Label>
          <IconButton className={'self-center'}>
            <img src={'images/cancel.svg'} />
          </IconButton>
        </FlexRow>
      }
      <DatePicker sx={{ backgroundColor: '#FFF' }} />
    </>
  )
}

export default PeriodDatePicker