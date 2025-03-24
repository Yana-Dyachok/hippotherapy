'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import disabilityImg from '../../../assets/svg/svg-disability.svg';
import familyImg from '../../../assets/svg/svg-family.svg';
import puzzleImg from '../../../assets/svg/svg-puzzle.svg';
import tankImg from '../../../assets/svg/svg-tank.svg';
import style from './help-section.module.scss';

export const HelpSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.block}>
        <h2 className={style.title}>{t('WeHelp')}</h2>
        <div className={style.figureBlock}>
          <figure className={style.figure}>
            <Image
              src={familyImg}
              alt="family"
              width={80}
              height={60}
              priority
              className="object-contain"
            />
            <figcaption className={style.figcaption}>
              {t('TextHelpOne')}
            </figcaption>
          </figure>

          <figure className={style.figure}>
            <Image src={tankImg} alt="tank" width={100} height={60} priority />
            <figcaption className={style.figcaption}>
              {t('TextHelpTwo')}
            </figcaption>
          </figure>
          <figure className={style.figure}>
            <Image
              src={puzzleImg}
              alt="puzzle"
              width={60}
              height={60}
              priority
            />
            <figcaption className={style.figcaption}>
              {t('TextHelpThree')}
            </figcaption>
          </figure>
          <figure className={style.figure}>
            <Image
              src={disabilityImg}
              alt="disability"
              width={54}
              height={60}
              priority
            />
            <figcaption className={style.figcaption}>
              {t('TextHelpFour')}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
