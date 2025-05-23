'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Logo } from '../ui/logo/logo';
import { ToggleLanguages } from '../toggle-languages/toggle-languages';
import { Button } from '../ui/button/button';
import { LinkItem } from '../ui/link/link';
import styles from './header.module.scss';

export const Header = () => {
  const theme = 'light';
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.burgerLogo}>
          <button
            className={styles.burgerMenu}
            onClick={toggleMenu}
            type="button"
          >
            <div
              className={
                isMenuOpen
                  ? `${styles.burgerIcon} ${styles.open}`
                  : styles.burgerIcon
              }
            >
              <span className={styles.spanBurger} />
              <span className={styles.spanBurger} />
              <span className={styles.spanBurger} />
            </div>
          </button>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav
          className={
            isMenuOpen ? `${styles.navMain} ${styles.open}` : styles.navMain
          }
        >
          <ul className={styles.navList}>
            <li onClick={() => setIsMenuOpen(false)}>
              <LinkItem to="#about-us" color={theme}>
                {t('AboutUs')}
              </LinkItem>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <LinkItem to="#member" color={theme}>
                {t('Join')}
              </LinkItem>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <LinkItem to="#contacts" color={theme}>
                {t('Contacts')}
              </LinkItem>
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className={styles.supportLink}
            >
              <LinkItem to="#'Support'" color={theme}>
                {t('Support')}
              </LinkItem>
            </li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <ToggleLanguages />
          <div className={styles.supportButton}>
            <Button btnType="button" color="dark" to="#support">
              {t('Support')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
