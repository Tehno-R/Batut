import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className="svg_sky">
                <img src="images/wave.svg" alt="Волна" />
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>ООО “ПОЛЕТАЕМ”</p>
                    <p>ИНН 1213141516</p>
                    <p>РФ, Приморский край, г. Владивосток, Ладыгина 3</p>
                    <p>+7 (914) 123-45-67</p>
                </div>
                <button className="up-button" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    Наверх ↑
                </button>
            </footer>
        </div>
    );
};

export default Footer;
