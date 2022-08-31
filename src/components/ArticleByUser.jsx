import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const ArticleByUser = () => {
    const [articlesByUser, setArticlesByUser] = useState([])

    useEffect(() => {
        axios.get("https://dev.to/api/articles/me", {
            headers: {
                "Access-Control-Allow-Headers": ["Api-Key"],
                "Accept": "application/json",
                "Content-Type": "application/vnd.forem.api-v1+json",
                "Api-Key": "rDuUZY8g9RiqzW6v2Gd2fecb",
            },
        }).then((res) => setArticlesByUser(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <Header />
            {console.log(articlesByUser)}
            {articlesByUser.title}
            {articlesByUser.description}
            <h1>HELLO</h1>
        </div>
    );
};

export default ArticleByUser;