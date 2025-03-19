import Image from 'next/image';
import logoImg from '../../../assets/logo/logo.svg';

export const Logo = () => {
  return <Image src={logoImg} alt="logo" width={143} height={24} priority />;
};
