import Link from 'next/link';
import { Social } from '../ui/social/social';

export const Footer = () => {
  return (
    <footer className="flex justify-between p-2">
      <ul className="">
        <li className=""></li>
        <li className="">
          <Link className="" href="">
            Cтатут спілки
          </Link>
        </li>
      </ul>
      <Social />
    </footer>
  );
};
