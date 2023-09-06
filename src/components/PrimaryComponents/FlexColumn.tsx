import {CSSProperties, FC, ReactNode} from "react";
import clsx from "clsx";
import {twMerge} from "tw-merge";

export interface IFlexColProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const FlexColumn: FC<IFlexColProps> = (props) => {
    return (
        <div style={props.style} className={twMerge(clsx('flex flex-col', props.className))}>
            {props.children}
        </div>
    );
};