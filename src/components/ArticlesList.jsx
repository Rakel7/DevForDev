import React from 'react';
import Article from './Article';

const ArticlesList = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <Article 
                key={article.id}
                article={article}/>
            ))}
        </div>
    );
};

export default ArticlesList;