import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const ArticleByUser = () => {
    const [articlesByUser, setArticlesByUser] = useState([])

    const apiKey = "rDuUZY8g9RiqzW6v2Gd2fecb";
    useEffect(() => {
        axios.get("https://dev.to/api/articles/me" , {
            headers: {
                        "Content-Type": "application/json",
                        "api-key": "rDuUZY8g9RiqzW6v2Gd2fecb",
                    },
        }).then((res) => setArticlesByUser(res.data))
        .catch((err) => console.log(err));
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