'use client';
import { LinkItem } from '../ui/link/link';
import { useTranslation } from 'react-i18next';
import { Social } from '../ui/social/social';
//import { Subscribe } from '../subscribe/subscribe';

import style from './footer.module.scss';

export const Footer = () => {
  const theme = 'light';
  const { t } = useTranslation();
  return (
    <footer className={style.footer} id="contacts">
      <div className={style.wrapper}>
        {/* <Subscribe /> */}
        <div className={style.contactsBlock}>
          <nav className={style.navBlock}>
            <ul className={style.navList}>
              <li>
                <LinkItem to="#about-us" color={theme}>
                  {t('AboutUs')}
                </LinkItem>
              </li>
              <li>
                <LinkItem to="/" color={theme}>
                  {t('Membership')}
                </LinkItem>
              </li>
              <li>
                <LinkItem to="#contacts" color={theme}>
                  {t('Contacts')}
                </LinkItem>
              </li>
            </ul>
            <ul className={style.navList}>
              <li>
                <LinkItem to="" color={theme}>
                  {t('Reports')}
                </LinkItem>
              </li>
              <li>
                <LinkItem to="charter.pdf" color={theme}>
                  {t('Charter')}
                </LinkItem>
              </li>
              <li>
                <LinkItem to="" color={theme}>
                  {t('PrivacyPolicy')}
                </LinkItem>
              </li>
            </ul>
          </nav>
          <Social />
        </div>
      </div>
    </footer>
  );
};
