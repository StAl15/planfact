import { OutlinedInput, FormControl } from '@mui/material'
import Button from '../components/PrimaryComponents/Button'
import AuthLayout from '../components/Layouts/LoginLayout/AuthLayout'
import Label from '../components/PrimaryComponents/Label'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className='text-center mb-[45px] px-[25px]'>
        <h1 className='font-extrabold text-[28px] mb-[15px]'>Вход в систему</h1>
        <p className='font-semibold text-[22px]'>Заполните форму и оцените <br /> все возможности ПланФакта</p>
      </div>
      <form action="" className='flex flex-col gap-[25px]'>
        <FormControl>
          <Label>Ваша почта</Label>
          <OutlinedInput placeholder='E-mail' autoFocus fullWidth sx={{ height: "45px" }} />
        </FormControl>
        <FormControl>
          <Label>Ваш пароль</Label>
          <OutlinedInput placeholder='Пароль' fullWidth sx={{ height: "45px" }} />
        </FormControl>
        <Button>Войти</Button>
      </form>
      <div className='text-center font-normal mt-[40px]'>
        <p>Нет аккаунта? <Link to='/signup' className='text-accent'>Зарегистрируйтесь</Link></p>
      </div>
    </AuthLayout>
  )
}

export default LoginPage