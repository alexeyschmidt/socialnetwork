import React from 'react';
import s from './LeftSide.module.css'

import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import Groups2Icon from '@mui/icons-material/Groups2';
import {Link} from "react-router-dom";


const LeftSide = () => {
    return (
        <wrapper className={s.leftContainer}>

            <div><a href="/postpage" className="menu-bottom__item"> <PersonIcon />
                Моя страница
            </a></div>

            <div><a href="#" className="menu-bottom__item"> <EmailOutlinedIcon />
                Сообщения
            </a></div>

            <Link to="/post-list" className="menu-bottom__item"> <FeedIcon />
                Лента
            </Link>

            <a href="#" className="menu-bottom__item"> <GroupIcon />
                Друзья
            </a>

            <a href="#" className="menu-bottom__item"> <Groups2Icon />
                Сообщества
            </a>

        </wrapper>
    );
};

export default LeftSide;
