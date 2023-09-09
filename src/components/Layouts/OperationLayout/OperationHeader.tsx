import { FC } from 'react'
import SearchField from '../../PrimaryComponents/SearchField'
import { Button, IconButton, Typography } from '@mui/material'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ExportButton from '../../PrimaryComponents/ExportButton';

const OperationHeader: FC = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-x-[20px]'>
        <Typography fontWeight={700} fontSize={'1.375rem'} fontFamily={'mulish'}>Операции</Typography>
        <IconButton className={'self-center'}>
          <img src={'images/octicon_question-24.svg'} />
        </IconButton>
      </div>
      <div className='flex items-center gap-x-[20px]'>
        <SearchField placeholder='Поиск по операциям' />
        <ExportButton/>
      </div>
    </div>
  )
}

export default OperationHeader