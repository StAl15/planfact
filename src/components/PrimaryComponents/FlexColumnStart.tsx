import {CSSProperties, FC, ReactNode} from "react";
import clsx from "clsx";
import {twMerge} from "tw-merge";

export interface IFlexColStartProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const FlexColumnStart: FC<IFlexColStartProps> = (props) => {
    return (
        <div style={props.style} className={twMerge(clsx('flex flex-col items-start', props.className))}>
            {props.children}
        </div>
    );
};