import Image from 'next/image';
import logoImg from '../../../assets/logo/logo.jpg';

const Logo = () => {
  return <Image src={logoImg} alt="logo" width={80} height={60} priority />;
};

export default Logo;
