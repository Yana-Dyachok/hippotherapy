'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import SponsorshipImg from '../../../assets/svg/sponsor.svg';
import VolunteeringImg from '../../../assets/svg/volunteering.svg';
import PartnershipImg from '../../../assets/svg/partnership.svg';
import { Title } from '@/components/ui/title/title';
import style from './participation-section.module.scss';

export const ParticipationSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.block}>
        <Title className={style.title} text={t('FormsParticipation')}></Title>
        <div className={style.figureBlockParticipation}>
          <figure className={style.figure}>
            <Image
              src={VolunteeringImg}
              alt="volunteering"
              width={100}
              height={60}
              priority
            />
            <figcaption className={style.figcaption}>
              {t('Volunteering')}
            </figcaption>
          </figure>
          <figure className={style.figure}>
            <Image
              src={PartnershipImg}
              alt="partnership"
              width={60}
              height={60}
              priority
            />
            <figcaption className={style.figcaption}>
              {t('Partnership')}
            </figcaption>
          </figure>
          <figure className={style.figure}>
            <Image
              src={SponsorshipImg}
              alt="sponsorship"
              width={54}
              height={60}
              priority
            />
            <figcaption className={style.figcaption}>
              {t('Sponsorship')}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
