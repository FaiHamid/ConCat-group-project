import React from 'react';
import { useTranslation } from 'react-i18next';
const { i18n } = useTranslation();

export const BtnChangeLanguage: React.FC = () => {
  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <div className="nav__buttons-lng-wrp">
      <button onClick={changeLanguage} className="nav__buttons-lng-btn">
        {i18n.language === 'en' ? 'UA' : 'EN'}
      </button>
    </div>
  );
};
