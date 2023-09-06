import {CSSProperties, FC, ReactNode} from "react";
import clsx from "clsx";
import {twMerge} from "tw-merge";
import {DefaultComponentProps} from "@mui/material/OverridableComponent";

export interface ILabelProperties {
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    htmlFor?: string;
}

const Label: FC<ILabelProperties> = (props) => {
    return (
        <label htmlFor={props.htmlFor}
               className={twMerge(clsx("uppercase text-[12px] font-bold font-mulish leading-normal", props.className))}
               style={props.style}>
            {props.children}
        </label>
    )
}

export default Label