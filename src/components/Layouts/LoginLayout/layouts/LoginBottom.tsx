import React from 'react'
import { Link } from 'react-router-dom'

const LoginBottom = () => {
  return (
    <div className='text-center font-normal mt-[40px]'>
      <p>Нет аккаунта? <Link to='/signup' className='text-accent'>Зарегистрируйтесь!</Link></p>
    </div>
  )
}

export default LoginBottom