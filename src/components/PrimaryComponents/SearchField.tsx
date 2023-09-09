import { FC } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export interface SearchProps {
  placeholder: string
}

const SearchField: FC<SearchProps> = (props) => {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      color={'secondary'}
      aria-label='search field'
      sx={{ backgroundColor: "#fff", width: "390px" }
      }
      id={'search'} className={'w-full'}
      placeholder={props.placeholder}
    />
  )
}

export default SearchField