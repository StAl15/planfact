import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Label from '../../../PrimaryComponents/Label'
import { FormControl, TextField, InputAdornment, IconButton, Button } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

const LoginInputForms = () => {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const disableReg = () => {
    return !!errors.accepted ||
      !!errors.email ||
      !!errors.password
  }

  const onSubmit = (data) => {
    !disableReg()
      ? alert('OK')
      : alert('BAD');
  }

  return (
    <form className={'w-full space-y-4'} onSubmit={handleSubmit(onSubmit)}>
      <FormControl className={'w-full items-start space-y-2'}>
        <Label htmlFor={'email'}>
          Ваша почта
        </Label>
        <TextField
          color={'secondary'}
          error={!!errors.email} {...register('email', {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
          })}
          id={'email'} className={'w-full'}
          placeholder={'mail@inbox.com'} />
      </FormControl>
      <FormControl className={'w-full items-start space-y-2'}>
        <Label htmlFor={'password'}>
          Ваш пароль
        </Label>
        <TextField
          type={showPassword ? 'text' : 'password'}
          inputProps={{
            endadornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          color={'secondary'}
          error={!!errors.password}
          {...register('password',
            { required: true, }
          )}
          id={'password'}
          className={'w-full'}
          placeholder={'Пароль'} />
      </FormControl>
      <Button
        disabled={disableReg()}
        color={'primary'}
        type={'submit'}
        className={'bg-[#1F204180] w-[20.3125rem] h-[45px]'}
        sx={{borderRadius: "10px"}}
        variant="contained"
        disableElevation>
        Войти
      </Button>
    </form>
  )
}

export default LoginInputForms