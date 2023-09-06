import {CSSProperties, FC, ReactNode} from "react";
import clsx from "clsx";
import {twMerge} from "tw-merge";

export interface IFlexRowProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const FlexRow: FC<IFlexRowProps> = (props) => {
    return (
        <div style={props.style} className={twMerge(clsx('flex flex-row', props.className))}>
            {props.children}
        </div>
    );
};