import React from 'react';
import Logo from '../../assets/img/rodflix.png';
import './Menu.css';
import Button from "./components/Button";
// import ButtonLink from './components/ButtonLink'


function Menu() {
    return (
        <header>
            <nav className="Menu">
                <a href="/">
                    <img className="Logo" src={Logo} alt='Logomarca da RodFlix'/>
                </a>

                <Button as="a" className="ButtonLink" href="/">
                    Novo vídeo
                </Button >
            </nav>
        </header>
    );
}

export default Menu;