import {FlexColumn} from "../components/PrimaryComponents/FlexColumn";
import {SignupHeader} from "../components/Layouts/SignUpLayout/layouts/SignupHeader";
import {SignupInputForms} from "../components/Layouts/SignUpLayout/layouts/SignupInputForms";
import {SignupBottom} from "../components/Layouts/SignUpLayout/layouts/SignupBottom";

const SignUpPage = () => {

    return (
        <FlexColumn
            className={'space-y-4 items-center text-center p-10 w-fit h-fit bg-white rounded-lg self-center absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]'}>
            <FlexColumn className={'items-center text-center space-y-4 w-[25rem]'}>
                <SignupHeader/>
                <SignupInputForms/>
                <SignupBottom/>
            </FlexColumn>
        </FlexColumn>
    )
}

export default SignUpPage