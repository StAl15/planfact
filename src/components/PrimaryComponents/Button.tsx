import {ChildrenProps} from "../../types"

const Button = ({children}: ChildrenProps) => {
    return (
        <button
            className='w-full h-[45px] font-[14px] font-extrabold bg-accent rounded-[10px] text-primary'>{children}</button>
    )
}

export default Button