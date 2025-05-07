'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import firstImg from '../../../assets/img/first.png';
import secondImg from '../../../assets/img/second.png';
import thirdImg from '../../../assets/img/third.png';
import { Title } from '@/components/ui/title/title';
import style from './directions-section.module.scss';

export const DirectionsSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.block}>
        <Title className={style.title} text={t('Directions')}></Title>
        <div className={style.figureBlock}>
          <figure className={style.figure}>
            <Image
              src={firstImg}
              alt="horses"
              width={344}
              height={250}
              priority
              className="object-contain"
            />
            <figcaption className={style.figcaption}>
              <h3 className={style.subTitle}>{t('Hippotherapy')}</h3>
              <p className={style.description}>{t('HippotherapyText')}</p>
            </figcaption>
          </figure>

          <figure className={style.figure}>
            <Image
              src={secondImg}
              alt="horses"
              width={344}
              height={250}
              priority
            />
            <figcaption className={style.figcaption}>
              <h3 className={style.subTitle}> {t('Ipovence')}</h3>
              <p className={style.description}>{t('IpovenceText')}</p>
            </figcaption>
          </figure>
          <figure className={style.figure}>
            <Image
              src={thirdImg}
              alt="horses"
              width={344}
              height={250}
              priority
            />
            <figcaption className={style.figcaption}>
              <h3 className={style.subTitle}> {t('AdaptiveEquestrian')}</h3>
              <p className={style.description}>{t('AdaptiveEquestrianText')}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
