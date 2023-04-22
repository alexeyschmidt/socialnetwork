import React from 'react';
import s from './NotFoundPage.module.css';




const NotFoundPage = ({ title, children, buttonText = "На главную", buttonAction, href }) => {
    return (
        <div className={s.notFound}>
            <img  className={s.image} alt="Ничего не найдено" />
            <h1 className={s.title}>{title}</h1>
            {children && children}

        </div>
    );
};

export default NotFoundPage;
