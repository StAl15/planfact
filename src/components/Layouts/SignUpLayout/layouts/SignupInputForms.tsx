import {Button, Checkbox, FormControl, FormGroup, TextField, Typography} from "@mui/material";
import Label from "../../../PrimaryComponents/Label";
import {useForm} from "react-hook-form";
import {FlexRow} from "../../../PrimaryComponents/FlexRow";
import {useState} from "react";
import {FlexColumn} from "../../../PrimaryComponents/FlexColumn";

export const SignupInputForms = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const [acceptPrivacy, setAcceptPrivacy] = useState(false);


    return (
        <>
            <FormGroup className={'w-full space-y-4'} onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={'w-full items-start space-y-2'}>
                    <Label htmlFor={'name'}>
                        ВАШЕ ИМЯ
                    </Label>
                    <TextField color={'secondary'}
                               error={!!errors.name}  {...register('name', {required: true})}
                               id={'name'}
                               className={'w-full'}
                               placeholder={'Напишите имя...'}/>
                </FormControl>
                <FormControl className={'w-full items-start space-y-2'}>
                    <Label htmlFor={'email'}>
                        ВАША ПОЧТА
                    </Label>
                    <TextField
                        color={'secondary'}
                        error={!!errors.email} {...register('email', {
                        required: true,
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                    })}
                        id={'email'} className={'w-full'}
                        placeholder={'Напишите почту...'}/>
                </FormControl>
                <FormControl className={'w-full items-start space-y-2'}>
                    <Label htmlFor={'phone'}>
                        ВАШ ТЕЛЕФОН
                    </Label>
                    <TextField
                        color={'secondary'}
                        error={!!errors.phone}
                        {...register('phone', {required: true})}
                        id={'phone'}
                        className={'w-full'}
                        placeholder={'Напишите телефон...'}/>
                </FormControl>

                <FlexColumn className={'items-center space-y-4'}>
                    <FlexRow className={'cursor-pointer space-x-2'}>
                        <FormControl>
                            <Checkbox
                                color={'primary'}
                                {...register('accept', {required: true})}
                                id={'accept'}
                                checked={acceptPrivacy}
                                onChange={(e) => setAcceptPrivacy(prev => !prev)}/>
                        </FormControl>

                        <label className={'cursor-pointer'} htmlFor={'accept'}>
                            <Typography fontFamily={'mulish'} color={'#1F204180'} fontWeight={'300'} align={"left"}
                                        variant={'subtitle2'}>
                                Я принимаю условия <span className={'text-[#2C9BA3]'}>Пользовательского соглашения и Политики
                        Конфиденциальности</span>
                            </Typography>
                        </label>
                    </FlexRow>

                    <Button
                        color={'primary'}
                        type={'submit'}
                        className={'bg-[#1F204180] w-[20.3125rem]'} variant="contained"
                        disableElevation>
                        Начать бесплатное тестирование
                    </Button>

                </FlexColumn>

            </FormGroup>

        </>
    );
};