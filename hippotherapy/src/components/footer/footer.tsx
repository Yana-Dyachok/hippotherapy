import Link from 'next/link';
import Social from '../ui/social/social';

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <h3 className="">Інформація</h3>
              <ul className="">
                <li className="">
                  <Link className="" href="/">
                    Про нас
                  </Link>
                </li>
                <li className="">
                  <Link className="" href="/">
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <Social />
        </div>
        <div className="">&copy;BraveWheel 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
