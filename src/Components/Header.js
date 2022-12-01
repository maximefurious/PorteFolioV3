import { useState } from 'react';
import '../css/header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        const sideNav = document.getElementById('mySidenav');
        if (!isMenuOpen) {
            sideNav.className += ' active';
        } else {
            sideNav.className = 'sidenav';
        }
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="TOP" className="notSelect">
            <nav id="extendnav">
                <ul>
                    <li><a href='#TOP'>Home</a></li>
                    <li><a href='#profil__box'>Profil</a></li>
                    <li><a href='#projet__box'>Projet</a></li>
                    <li><a href='#formation__box'>Formation</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#skills__box'>Skills</a></li>
                    <li><a href='#CONTACT'>Contact</a></li>
                </ul>
            </nav>
            <div id="burger-container">
            <div id="mySidenav" className="sidenav">
                <span id="closeBtn" className="closeNav" onClick={toggleMenu}>&times;</span>
                <ul>
                    <li><a href="#TOP">Home</a></li>
                    <li><a href="#profil__box">Profil</a></li>
                    <li><a href="#projet__box">Projet</a></li>
                    <li><a href="#formation__box">Formation</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills__box">Skills</a></li>
                    <li><a href="#CONTACT">Contact</a></li>
                </ul>
            </div>

            <div id="openBtn" onClick={toggleMenu} className="openNav">
                <span className="burger-icon">
                  <span></span>
                <span></span>
                <span></span>
                </span>
            </div>
        </div>
        </header>
    );
}

export default Header;
