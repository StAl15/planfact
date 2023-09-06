import Label from "../../../PrimaryComponents/Label";
import {FormControl, TextField} from "@mui/material";
import {FC} from "react";

export interface IFormControlInputProps {
    id?: string;
    label?: string;
    placeholder?: string;
}

export const FormControInput: FC<IFormControlInputProps> = (props) => {
    return (
        <FormControl className={'w-full items-start space-y-2'}>
            <Label htmlFor={props.id}>
                {props.label}
            </Label>
            <TextField id={props.id} className={'w-full'} placeholder={props.placeholder}/>
        </FormControl>
    );
};