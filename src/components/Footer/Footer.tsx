import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo" />
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/github" className="footer__link">GITHUB</a>
              </li>
              <li className="footer__item">
                <Link
                  to="/contacts"
                  className="footer__link"
                >
                  CONTACTS
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  to="/rights"
                  className="footer__link"
                >
                  RIGHTS
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer__top">
            <span className="footer__top-title">Back to top</span>
            <button
              type="button"
              className="footer__top-button"
              aria-label="top-button"
              onClick={toTop}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
