import React from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';
import ArticleByUser from './ArticleByUser';
import { Link } from 'react-router-dom';


const Ul = styled.ul `
        list-style:none;
        display: flex;
        flex-flow: row nowrap;
        
        li{
        padding: 18px 10px;
    }

    @media (max-width: 768px){
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top:0;
        right:0;
        height: 80vh;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        opacity: 0.98;

        li{
            color:#fff;
            font-size: 20px;  
        }

        a{
            color:#fff;
        }

    }
    
`

const RightNav = ({open}) => {
    return (

            <Ul open={open}>
                <li >
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                <Link to="/articleByUser">Liste</Link>
                </li>
                <li >
                    <Link to="/creation">Création</Link>
                </li>
            </Ul>

    );
};

export default RightNav;