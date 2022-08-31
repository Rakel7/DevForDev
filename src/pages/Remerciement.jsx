import React from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';

const Remerciement = () => {

    const { state } = useLocation();
    const { title, content, url, select, publish } = state;

    return (
        <div>
            <Header />
            <h1>Merci votre article a bien été pris en compte</h1>
            <h3>Voici les données qui nous on été tranmis :</h3>
            {JSON.stringify({ title, content, url, select, publish })}

        </div>
    );
};

export default Remerciement;