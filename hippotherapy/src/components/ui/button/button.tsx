type ButtonProps = {
  btnType: 'button' | 'submit';
  children: string;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  btnType = 'button',
  children,
  onClick,
  to,
  disabled,
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
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300
      ${disabled ? 'bg-gray-300 text-blue-600 cursor-not-allowed' : 'hover:bg-blue-100'}`}
      disabled={disabled}
      type={btnType === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
