import { IconButton, Typography } from '@mui/material'
import { FC } from 'react'

export interface FilterHeaderProps {
  filterCount?: number
}

const FilterHeader: FC<FilterHeaderProps> = (props) => {
  return (
    <>
      <Typography fontFamily={'mulish'} fontWeight={'700'} fontSize={'1.375rem'}>Фильтры</Typography>
      {props.filterCount && 
        <div className="flex items-center my-[5px] gap-x-[6px] w-fit pl-[5px] border-[1px] border-[#C7C7CF] rounded-[4px]">
          <Typography fontFamily={'mulish'} fontWeight={'400'} fontSize={'1rem'} color={'#8B91A1'}>{props.filterCount}</Typography>
          <IconButton size="small" className={'self-center'}>
            <img src={'images/cancel.svg'} />
          </IconButton>
        </div>
      }
    </>
  )
}

export default FilterHeader