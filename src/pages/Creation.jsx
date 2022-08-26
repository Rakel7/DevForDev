import React from 'react';
import "../index.css";
import Editor from "../components/Editor";
import Header from './Header';

const Creation = () => {
    return (
        <div>
            <Header />
            <h1>Création d'article</h1>
            <Editor />
        </div>
    );
};

export default Creation;