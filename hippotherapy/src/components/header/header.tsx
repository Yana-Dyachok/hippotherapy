'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/logo/logo';
import ToggleLanguages from '../toggle-languages/toggle-languages';
import Button from '../ui/button/button';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="flex justify-between gap-2 p-5 text-[#000000] bg-[#FFFFFF]">
      <Link href="/" className="">
        <Logo />
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li className="">
            <Link href="/" className="">
              {t('Main')}
            </Link>
          </li>
          <li className="">
            <Link href="/membership" className="">
              {t('Membership')}
            </Link>
          </li>
          <li className="">
            <Link href="/about-us" className="">
              {t('AboutUs')}
            </Link>
          </li>
          <li>
            {' '}
            <Link href="#" className="">
              {t('Join')}
            </Link>
          </li>
          <li>
            {' '}
            <Link href="#" className="">
              {t('Contacts')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <ToggleLanguages />
        <Button btnType="button" color="dark" disabled={true}>
          {t('Support')}
        </Button>
      </div>
    </header>
  );
};

export default Header;
