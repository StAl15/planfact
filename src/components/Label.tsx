import { ChildrenProps } from "../types"

const Label = ({children}: ChildrenProps) => {
  return (
    <p className="uppercase text-[12px] font-bold font-mulish leading-normal">{children}</p>
  )
}

export default Label