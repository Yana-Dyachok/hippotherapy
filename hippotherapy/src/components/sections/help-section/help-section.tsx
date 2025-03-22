'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import disabilityImg from '../../../assets/svg/svg-disability.svg';
import familyImg from '../../../assets/svg/svg-family.svg';
import puzzleImg from '../../../assets/svg/svg-puzzle.svg';
import tankImg from '../../../assets/svg/svg-tank.svg';

export const HelpSection = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-[372px] flex justify-center bg-white py-15 text-black">
      <div className="max-w-[1440px] flex flex-col gap-4">
        <h2 className="font-rubik text-[40px] leading-[60px] tracking-[0] font-extrabold">
          {t('WeHelp')}
        </h2>
        <div className="flex flex-wrap">
          <figure className="w-[275px] h-[132px] flex flex-col justify-center items-center gap-4">
            <Image
              src={familyImg}
              alt="insta"
              width={80}
              height={60}
              priority
              className="object-contain"
            />
            <figcaption className="font-roboto text-base text-center">
              {t('TextHelpOne')}
            </figcaption>
          </figure>

          <figure className="w-[275px] h-[132px] flex flex-col justify-center items-center gap-4 px-4">
            <Image src={tankImg} alt="insta" width={100} height={60} priority />
            <figcaption className="font-roboto text-base  text-center">
              {t('TextHelpTwo')}
            </figcaption>
          </figure>
          <figure className="w-[275px] h-[132px] flex flex-col justify-center items-center gap-4">
            <Image
              src={puzzleImg}
              alt="insta"
              width={60}
              height={60}
              priority
            />
            <figcaption className="font-roboto text-base pb-2 text-center">
              {t('TextHelpThree')}
            </figcaption>
          </figure>
          <figure className="w-[275px] h-[132px] flex flex-col justify-center items-center gap-4">
            <Image
              src={disabilityImg}
              alt="insta"
              width={54}
              height={60}
              priority
            />
            <figcaption className="font-roboto text-base pb-2 text-center">
              {t('TextHelpFour')}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
