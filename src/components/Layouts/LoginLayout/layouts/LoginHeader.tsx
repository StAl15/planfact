import { Typography } from "@mui/material";

const LoginHeader = () => {
  return (
    <>
      <Typography fontFamily={'mulish'} fontWeight={'800'} fontSize={'1.75rem'}>ВХОД В СИСТЕМУ</Typography>
      <Typography fontFamily={'mulish'} fontWeight={'600'} fontSize={'1.375rem'}>
        Заполните форму и оцените все возможности ПланФакта
      </Typography>
    </>
  );
};

export default LoginHeader;