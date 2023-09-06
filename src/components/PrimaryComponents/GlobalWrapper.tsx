import {CSSProperties, FC, ReactNode} from "react";
import {FlexColumn} from "./FlexColumn";
import {twMerge} from "tw-merge";
import clsx from "clsx";

export interface IGlobalWrapperProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const GlobalWrapper: FC<IGlobalWrapperProps> = (props) => {
    return (
        <FlexColumn
            style={props.style}
            className={twMerge(clsx('w-screen h-screen bg-[#EEEEEE] overflow-auto', props.className))}>
            {props.children}
        </FlexColumn>
    );
};