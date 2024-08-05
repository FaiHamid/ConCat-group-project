import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Contacts.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import IgorPhoto from './ImagePersonalCard/PhotoIgor.jpg';
import ArtemPhoto from './ImagePersonalCard/PhotoArtem.jpg';
import FaizaPhoto from './ImagePersonalCard/PhotoFaiza.jpg';
import OleksiiPhoto from './ImagePersonalCard/PhotoOleksii.jpg';
import SofiiaPhoto from './ImagePersonalCard/PhotoSofiia.jpg';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

const cardData = [
  {
    photo: FaizaPhoto,
    name: 'contactsPage.names.faiza',
    quote: 'contactsPage.quotes.faiza',
    links: [
      { href: 'https://www.linkedin.com/in/faiza-hamid-8d/', text: 'Linkedin' },
      { href: 'mailto:hamid.faiza811@gmail.com', text: 'Gmail' },
      { href: 'https://t.me/fai_ham', text: 'Telegram' },
    ],
  },
  {
    photo: IgorPhoto,
    name: 'contactsPage.names.igor',
    quote: 'contactsPage.quotes.igor',
    links: [
      {
        href: 'https://www.linkedin.com/in/igor-omelianenko-a959b124a/',
        text: 'Linkedin',
      },
      { href: 'mailto:omelianenko.igor.work@gmail.com', text: 'Gmail' },
      { href: 'https://t.me/Om1gSe', text: 'Telegram' },
    ],
  },
  {
    photo: SofiiaPhoto,
    name: 'contactsPage.names.sofiia',
    quote: 'contactsPage.quotes.sofiia',
    links: [
      {
        href: 'https://www.linkedin.com/in/%D1%81%D0%BE%D1%84%D1%96%D1%8F-%D0%BF%D1%80%D0%B8%D1%94%D0%BC%D1%81%D1%8C%D0%BA%D0%B0-5263902bb/?originalSubdomain=ua',
        text: 'Linkedin',
      },
      { href: 'mailto:sofiia.priyemska.work@gmail.com', text: 'Gmail' },
      { href: 'https://t.me/priemssonia', text: 'Telegram' },
    ],
  },
  {
    photo: ArtemPhoto,
    name: 'contactsPage.names.artem',
    quote: 'contactsPage.quotes.artem',
    links: [
      {
        href: 'https://www.linkedin.com/in/artem-kasprukov-b99a97213/',
        text: 'Linkedin',
      },
      { href: 'mailto:kasprukov.artem@gmail.com', text: 'Gmail' },
      { href: 'https://t.me/KasperArtem', text: 'Telegram' },
    ],
  },
  {
    photo: OleksiiPhoto,
    name: 'contactsPage.names.oleksii',
    quote: 'contactsPage.quotes.oleksii',
    links: [
      { href: 'https://www.linkedin.com/in/oleksii-knihin/', text: 'Linkedin' },
      { href: 'mailto:oleksii.knihin@gmail.com', text: 'Gmail' },
      { href: 'https://t.me/OleksiiKnihin', text: 'Telegram' },
    ],
  },
];

export const Contacts: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={classNames(classes.Contacts, {
        [classes.lightTheme]: theme === 'light',
        [classes.darkTheme]: theme === 'dark',
      })}
    >
      <Breadcrumbs />
      <>
        <div>
          <h1 className={classes.contactsTitle}>
            {t('contactsPage.contacts')}
          </h1>
          <h1 className={classes.contactsTitleH}>ConCats()🚀</h1>
        </div>
        <div className={classes.contacts__container}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${classes.personalCard} ${index % 2 === 1 ? classes.reverse : classes.standart}`}
            >
              <div className={classes.blockImage}>
                <img
                  className={classes.personalImage}
                  src={card.photo}
                  alt="personalImage"
                />
              </div>
              <div className={classes.personalInfo}>
                <div className={classes.personalNameBlock}>
                  <h2>{t(card.name)}</h2>
                </div>
                <div className={classes.personalQuote}>
                  <p>
                    <u>{t(card.quote)}</u>
                  </p>
                </div>
                <div
                  className={`${classes.blockPersonalLink} ${index % 2 === 1 ? classes.reverseLinks : classes.standartLinks}`}
                >
                  {card.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className={classes.personalLink}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`img/icons/${link.text}.png`}
                        alt={`${link.text}`}
                        className={classes.img_links}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
