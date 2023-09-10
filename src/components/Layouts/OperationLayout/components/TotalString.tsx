import { Typography } from '@mui/material'
import { FC } from 'react'
import { FlexRow } from '../../../PrimaryComponents/FlexRow'

export interface TotalStringProps {
  count?: number,
  type?: string,
  total?: number,
  currency?: '₽'
}

const TotalString: FC<TotalStringProps> = (props) => {
  return (
    <FlexRow style={{ gap: "10px", color: "#8B91A1" }}>
      <Typography fontFamily={'mulish'} fontWeight={'400'} fontSize={'1rem'} color={'secondary.main'}>130 операций</Typography>
      |
      <TotalStringItem count={24} type='поступлений: ' total={8700000} currency='₽' />
      |
      <TotalStringItem count={24} type='выплат: ' total={8700000} currency='₽' />
      |
      <TotalStringItem count={24} type='перемещений: ' total={8700000} currency='₽' />
      |
      <TotalStringItem count={24} type='начислений: ' total={8700000} currency='₽' />
      |
      <TotalStringFinal type='Итого: ' total={8700000} currency='₽' />
    </FlexRow>
  )
}

export const TotalStringItem: FC<TotalStringProps> = (props) => {
  return (
    <FlexRow style={{ gap: "10px" }}>
      <Typography fontFamily={'mulish'} fontWeight={'400'} fontSize={'1rem'} color={'#8B91A1'}>{props.count} {props.type}</Typography>
      <Typography fontFamily={'mulish'} fontWeight={'700'} fontSize={'1rem'} color={'secondary.main'}>{props.total} {props.currency}</Typography>
    </FlexRow>
  )
}

export const TotalStringFinal: FC<TotalStringProps> = (props) => {
  return (
    <>
      <Typography fontFamily={'mulish'} fontWeight={'400'} fontSize={'1rem'}>{props.type}</Typography>
      <Typography fontFamily={'mulish'} fontWeight={'700'} fontSize={'1rem'} color={'#028D08'}>{props.total} {props.currency}</Typography>
    </>
  )
}

export default TotalString