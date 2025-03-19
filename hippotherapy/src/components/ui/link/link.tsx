import Link from 'next/link';

type LinkProps = {
  children: string;
  to: string;
  color: 'dark' | 'light';
};

export const LinkItem = ({ children, to, color }: LinkProps) => {
  return (
    <Link
      href={to}
      className={`relative pb-1 ${
        color === 'light'
          ? 'before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-[var(--gray-100)] before:transition-all before:duration-300 before:ease-in-out before:-translate-x-1/2 hover:before:w-full'
          : 'hover:text-[var(--gray-100)]'
      }`}
    >
      {children}
    </Link>
  );
};
