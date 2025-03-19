'use client';

import Link from 'next/link';

type ButtonProps = {
  btnType: 'button' | 'submit';
  children: string;
  to?: string;
  disabled?: boolean;
  color: 'dark' | 'light';
  onClick?: () => void;
};

export const Button = ({
  btnType = 'button',
  children,
  onClick,
  to,
  disabled,
  color,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonContent = (
    <button
      className={`py-4 px-8  transition-shadow duration-300 ${color === 'light' ? 'bg-white text-black hover:bg-[#FAFAFA] hover:border-[1px] hover:border-[var(--gray-100)]' : 'bg-[#1B1B1B] text-white'} cursor-pointer font-semibold rounded-lg shadow-md transition-all duration-300
      ${disabled ? 'bg-[#DCDCDC] text-[#D0D0D0] cursor-not-allowed' : 'hover:shadow-l hover:shadow-[#AFA7A3] focus:bg-[var(--gray-100)] focus:shadow-lg focus::shadow-[#2C1C15]'}`}
      disabled={disabled}
      type={btnType === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
    >
      {children}
    </button>
  );

  if (to) {
    return (
      <Link href={to} passHref>
        {buttonContent}
      </Link>
    );
  }
  return buttonContent;
};
