import {Link} from "react-router-dom";
import {Typography} from "@mui/material";

export const SignupBottom = () => {
    return (
        <>
            <Typography fontFamily={'mulish'}
                        color={'#1F204180'}
                        fontWeight={'300'}
                        align={"left"}
                        variant={'subtitle2'}>
                Вы уже зарегистрированы? <Link to={'login'} className={'text-[#2C9BA3]'}>Зайдите в аккаунт</Link>
            </Typography>
        </>
    );
};