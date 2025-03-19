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
      className={`${color === 'light' ? 'text-black  hover:text-[#877A76]' : 'text-white'} cursor-pointer`}
    >
      {children}
    </Link>
  );
};
