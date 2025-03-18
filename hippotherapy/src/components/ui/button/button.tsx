type ButtonProps = {
  btnType: 'button' | 'submit';
  children: string;
  to?: string;
  disabled?: boolean;
  color: 'dark' | 'light';
  onClick?: () => void;
};

const Button = ({
  btnType = 'button',
  children,
  onClick,
  to,
  disabled,
  color,
}: ButtonProps) => {
  const handleClick = () => {
    if (to) {
      window.location.href = to;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`px-2 py-2  transition-shadow duration-300 ${color === 'light' ? 'bg-white text-black' : 'bg-[#1B1B1B] text-white'}  font-semibold rounded-lg shadow-md transition-all duration-300
      ${disabled ? 'bg-[#DCDCDC] text-[#1B1B1B80] cursor-not-allowed' : 'hover:shadow-xs hover:shadow-black'}`}
      disabled={disabled}
      type={btnType === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
