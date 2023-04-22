import React from "react";
import s from './Header.module.css';
import {
  AppBar,
  Container,
  IconButton,
  Input,
  Toolbar,
  Typography,
} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';


import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';


// import Logo from './logo192.png';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar className={s.toolbar}>

          {/*<Logo />*/}

          <Typography variant="h5" >
            Global.Today
          </Typography>

          <div className={s.header__icons}>

            <span className={s.header__icon}><IconButton edge="start" size="large" color="inherit">
              <EmailOutlinedIcon />
            </IconButton></span>

            <span className={s.header__icon}><IconButton edge="start" size="large" color="inherit">
              <NotificationsOutlinedIcon />
            </IconButton></span>

            <span className={s.header__icon}><IconButton edge="start" size="large" color="inherit">
              <MessageOutlinedIcon />
            </IconButton></span>

            <span className={s.header__icon}><IconButton edge="start" size="large" color="inherit">
              <FavoriteBorderOutlinedIcon />
            </IconButton></span>

            <span className={s.header__icon}><IconButton edge="start" size="large" color="inherit">
              <AudiotrackOutlinedIcon />
            </IconButton></span>

            <span className={s.header__icon}><IconButton edge="start" size="large" color="inherit">
              <PlayCircleFilledOutlinedIcon />
            </IconButton></span>

          </div>

          <Input className={s.main_search}
                 endAdornment={
                   <IconButton className={s.main_search_icon}>
                     <SearchIcon />
                   </IconButton>
                 }
                 placeholder="искать на сайте…"
                 aria-label="search"
          >
          </Input>


          <IconButton edge="start" size="large" color="inherit">
            <AccountBoxIcon/>
          </IconButton>



        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
