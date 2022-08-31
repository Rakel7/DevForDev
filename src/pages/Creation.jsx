import React from 'react';
import "../index.css";
import Editor from "../components/Editor";
import Header from '../components/Header';
import CreationForm from '../components/CreationForm';

const Creation = () => {
    return (
        <div>
            <Header />
            <h1>Création d'article</h1>
            <CreationForm />
            {/* <Editor /> */}
        </div>
    );
};

export default Creation;