'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Logo } from '../ui/logo/logo';
import { ToggleLanguages } from '../toggle-languages/toggle-languages';
import { Button } from '../ui/button/button';
import { LinkItem } from '../ui/link/link';
import style from './header.module.scss';

export const Header = () => {
  const theme = 'light';
  const { t } = useTranslation();
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className={style.navList}>
            <li>
              <LinkItem to="/" color={theme}>
                {t('Main')}
              </LinkItem>
            </li>
            <li>
              <LinkItem to="/membership" color={theme}>
                {t('Membership')}
              </LinkItem>
            </li>
            <li>
              <LinkItem to="/about-us" color={theme}>
                {t('AboutUs')}
              </LinkItem>
            </li>
            <li>
              {' '}
              <LinkItem to="#join" color={theme}>
                {t('Join')}
              </LinkItem>
            </li>
            <li>
              {' '}
              <LinkItem to="#contacts" color={theme}>
                {t('Contacts')}
              </LinkItem>
            </li>
          </ul>
        </nav>
        <div className={style.buttons}>
          <ToggleLanguages />
          <Button btnType="button" color="dark">
            {t('Support')}
          </Button>
        </div>
      </div>
    </header>
  );
};
