import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


const PostPage = () => {
    const [post, setPost] = useState();
    const {id} = useParams();
    console.log('iddd', id)

    useEffect(() => {
        // запрос за постом по id, записал в стейт setPost и потом из стейта прокинул в страницу для отрисовки данные
    }, []);

    return (
        <>
            POst id
        </>
    );
};

export default PostPage;
