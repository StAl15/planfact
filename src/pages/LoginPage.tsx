import LoginInputForms from '../components/Layouts/LoginLayout/layouts/LoginInputForms'
import LoginHeader from '../components/Layouts/LoginLayout/layouts/LoginHeader'
import LoginBottom from '../components/Layouts/LoginLayout/layouts/LoginBottom'

import { FlexColumn } from '../components/PrimaryComponents/FlexColumn'

const LoginPage = () => {
  return (
    <FlexColumn
      className={'space-y-4 items-center text-center p-10 w-fit h-fit bg-white rounded-lg self-center absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]'}
    >
      <FlexColumn className={'items-center text-center space-y-4 w-[25rem]'}>
        <LoginHeader />
        <LoginInputForms />
        <LoginBottom />
      </FlexColumn>
    </FlexColumn>
  )
}

export default LoginPage