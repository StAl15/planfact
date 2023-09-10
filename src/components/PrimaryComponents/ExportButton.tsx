import React, { FC } from 'react'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Typography } from '@mui/material';

const ExportButton: FC = () => {
  return (
    <button
      className='flex items-center gap-x-[5px] bg-primary border-[1px] border-[#C7C7CF] rounded-[4px] py-[15px] px-[12px]'
    >
      <SaveAltIcon className='text-accent' /> 
      <Typography fontWeight={400} fontSize={'1rem'} fontFamily={'mulish'}>.xls</Typography>
    </button>
  )
}

export default ExportButton