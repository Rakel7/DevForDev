import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../pages/Header';

const ArticleByUser = () => {
    const [articlesByUser, setArticlesByUser] = useState([])

    useEffect(() => {
        axios.get(' https://dev.to/api/articles/1173347', {})
            .then((res) => setArticlesByUser(res.data))
    }, [])

    return (
        <div>
            <Header />
            {articlesByUser.title}
            {articlesByUser.description}
            <h1>HELLO</h1>
        </div>
    );
};

export default ArticleByUser;