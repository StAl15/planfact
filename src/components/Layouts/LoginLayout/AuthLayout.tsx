import { ChildrenProps } from '../../../types'

const AuthLayout = ({ children }: ChildrenProps) => {
  return (
    <div className='min-h-[100vh] w-[100vw] flex justify-center items-center font-mulish text-secondary'>
      <div className='max-w-[460px] px-[45px] py-[50px] bg-primary rounded-[30px]'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout