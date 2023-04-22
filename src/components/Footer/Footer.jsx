import React from "react";



import { Typography, Box, Link } from "@mui/material";
import s from "./Footer.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "string",
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 3,
          },
        }}
        // onClick={preventDefault}
      >

          <Typography paragraph>2023</Typography>
          <CopyrightIcon/>
          <Typography paragraph>Global.Today</Typography>


          <a href="/" className="menu-bottom__item">
              Политика конфиденциальности
          </a>
          <a href="/catalogue" className="menu-bottom__item">
              Лицензионное соглашение
          </a>
          <a href="/" className="menu-bottom__item">
              О компании
          </a>




          <Link href="/postpage"  className="menu-bottom__item">О компании</Link>

          <a href="/catalogue" className="menu-bottom__item">
              Обратная связь
          </a>


      </Box>
    </footer>
  );
};


export default Footer;



