import Link from 'next/link';
import Image from 'next/image';
import instaIcon from '../../../assets/svg/icon-insta.svg';
import telegIcon from '../../../assets/svg/icon-telegram.svg';
import faceIcon from '../../../assets/svg/icon-facebook.svg';

export const Social = () => {
  return (
    <ul className="flex gap-4">
      <li className="">
        <Link
          className=""
          href="https://www.instagram.com/ueatara/#"
          title="Перейти в інстаграм"
          aria-label="Інстаграм"
        >
          <Image src={instaIcon} alt="insta" width={20} height={20} priority />
        </Link>
      </li>
      <li className="">
        <Link
          className=""
          href="https://www.facebook.com/ueatara/"
          title="Перейти в фейсбук"
          aria-label="Фейсбук"
        >
          <Image src={faceIcon} alt="face" width={20} height={20} priority />
        </Link>
      </li>
      <li className="">
        <Link
          className=""
          href="https://t.me/UEATARA"
          title="Перейти в телеграм"
          aria-label="телеграм"
        >
          <Image
            src={telegIcon}
            alt="telegram"
            width={20}
            height={20}
            priority
          />
        </Link>
      </li>
    </ul>
  );
};
