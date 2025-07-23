import React, { useState } from 'react';
import "./header.css";
import ThemeButton from './themeButton/ThemeButton';
import LanguageSelector from './language/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  /* Change Background Header */
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if(this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">ETW</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>{t("header.home")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>{t("header.about")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>{t("header.skills")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-layer-group nav__icon"></i>{t("header.portfolio")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav === "#experience" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>{t("header.experience")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-phone nav__icon"></i>{t("header.contact")}
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"> </i>
        </div>

        <div className="header__tools">
          <LanguageSelector />
          <ThemeButton />
        </div>
          
      </nav>
    </header>
  )
}

export default Header