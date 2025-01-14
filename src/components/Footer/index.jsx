import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social_media'>
                <a href="https://CamiloCuspian.github.io/Aluraflix"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/juan-camilo-cuspian/"><FaLinkedin /></a>
            </div>
            <p className='footer_title'>ALURAFLIX</p>
            <div className='author'>
                <p>Ralizado por:</p>
                <a href="https://www.linkedin.com/in/juan-camilo-cuspian/">Camilo Cuspian</a>
            </div>
        </footer>
    )
}

export { Footer }