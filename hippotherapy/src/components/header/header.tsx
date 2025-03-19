'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Logo } from '../ui/logo/logo';
import { ToggleLanguages } from '../toggle-languages/toggle-languages';
import { Button } from '../ui/button/button';
import { LinkItem } from '../ui/link/link';

export const Header = () => {
  const theme = 'light';
  const { t } = useTranslation();
  return (
    <header className="flex justify-center  text-[#000000] bg-[#FFFFFF]">
      <div className="w-[1440px] max-w-[1440px] flex items-center justify-between gap-2 p-5">
        <Link href="/" className="">
          <Logo />
        </Link>
        <nav>
          <ul className="flex gap-3">
            <li className="">
              <LinkItem to="/" color={theme}>
                {t('Main')}
              </LinkItem>
            </li>
            <li className="">
              <LinkItem to="/membership" color={theme}>
                {t('Membership')}
              </LinkItem>
            </li>
            <li className="">
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
        <div className="flex">
          <ToggleLanguages />
          <Button btnType="button" color="dark">
            {t('Support')}
          </Button>
        </div>
      </div>
    </header>
  );
};
