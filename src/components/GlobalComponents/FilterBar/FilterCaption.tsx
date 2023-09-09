import React, {FC} from 'react'
import { FlexRow } from '../../PrimaryComponents/FlexRow'
import { IconButton, Typography } from '@mui/material'

interface FilterCaptionProps {
  name: string
}

const FilterCaption: FC<FilterCaptionProps> = (props) => {
  return (
    <FlexRow style={{ alignItems: "center" }}>
      <Typography fontFamily={'mulish'} fontWeight={'400'} fontSize={'1rem'} color={'#8B91A1'}>{props.name}</Typography>
      <IconButton className={'self-center'}>
        <img src={'images/octicon_question-24.svg'} />
      </IconButton>
    </FlexRow>
  )
}

export default FilterCaption