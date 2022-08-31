import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArticlesList from '../components/ArticlesList';
import Header from '../components/Header';

const Home = () => {
    const [articles, setArticles] = useState([])

     useEffect(() => {
        axios.get(' https://dev.to/api/articles', {})
        .then((res) => setArticles(res.data))
     }, [])
  // axios.get(' https://dev.to/api/articles', {
    //     headers: {
    //         "Content-Type": "application/json",
    //         "api-key": "rDuUZY8g9RiqzW6v2Gd2fecb",
    //     },
    // })
    //     .then((res) => setArticles(res.data))


    // const url ="https://dev.to/api/articles";

    // const config = {
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // };

    // // Add Your Key Here!!!
    // axios.defaults.headers.common = {
    //     "APIKEY": "rDuUZY8g9RiqzW6v2Gd2fecb",
    // };

    // const smsD =  axios({
    //     method: "get",
    //     url: url,
    //     data: {
    //         message: "Some message to a lonely_server",
    //     },
    //     config,
    // });

    return (
        <div>
            <Header />
            <h1>Bienvenue sur DevforDev</h1>
            <ArticlesList
            articles={articles}
            />
        </div>
    );
};

export default Home;