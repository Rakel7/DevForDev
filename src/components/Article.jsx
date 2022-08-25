import React from 'react';

const Article = ({ article }) => {
    return (
        <>
            <div style={{ boxShadow: "10px 5px 5px gray", padding: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", fontSize: "15px" }}>
                    <img src={article.user.profile_image} style={{ borderRadius: "50%", width: "10%" }}></img>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <a style={{ color: "gray" }}>{article.user.name}</a>
                        <a style={{ color: "gray" }} href={article.url}>{article.readable_publish_date}</a>
                    </div>
                </div>
                <div>
                <a href={article.url}><h2 style={{ color: "blue" }}>{article.title}</h2></a>
                    <a href={article.url}><h3 style={{ color: "black" }}>{article.description}</h3></a>
                    <div style={{ display: "flex", justifyContent: "space-around"}}>
                    {article.tag_list.map((tag) => (
                    <p># {tag} </p>
                    ))} 
                    </div>
                </div>
            </div>
            <br />
        </>
    );
};

export default Article;