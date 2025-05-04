import Link from 'next/link';
import Image from 'next/image';
import instaIcon from '../../../assets/svg/instagram.svg';
import telegIcon from '../../../assets/svg/telegram.svg';
import faceIcon from '../../../assets/svg/facebook.svg';
import youtubeIcon from '../../../assets/svg/youtube.svg';
import style from './social.module.scss';

export const Social = () => {
  return (
    <ul className={style.social}>
      <li>
        <Link href="https://www.facebook.com/ueatara/">
          <Image src={faceIcon} alt="face" width={24} height={24} priority />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/ueatara/#">
          <Image src={instaIcon} alt="insta" width={24} height={24} priority />
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/@UEATARA">
          <Image
            src={youtubeIcon}
            alt="youtube"
            width={24}
            height={24}
            priority
          />
        </Link>
      </li>
      <li>
        <Link href="https://t.me/UEATARA">
          <Image
            src={telegIcon}
            alt="telegram"
            width={24}
            height={24}
            priority
          />
        </Link>
      </li>
    </ul>
  );
};
