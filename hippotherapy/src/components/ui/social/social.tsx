import Link from 'next/link';

const Social = () => {
  return (
    <ul className="">
      <li className="">
        <Link
          className=""
          href="https://www.instagram.com/"
          title="Перейти в інстаграм"
          aria-label="Інстаграм"
        ></Link>
      </li>
      <li className="">
        <Link
          className=""
          href="https://workspace.google.com/intl/uk/gmail/"
          title="Перейти в пошта"
          aria-label="пошта"
        ></Link>
      </li>
      <li className="">
        <Link
          className=""
          href="https://fb.com"
          title="Перейти в фейсбук"
          aria-label="Фейсбук"
        ></Link>
      </li>
      <li className="">
        <Link
          className=""
          href="https://web.telegram.org/a/"
          title="Перейти в телеграм"
          aria-label="телеграм"
        ></Link>
      </li>
    </ul>
  );
};

export default Social;
