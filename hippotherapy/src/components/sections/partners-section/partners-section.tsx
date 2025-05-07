'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { SliderButtons } from '@/components/ui/slider-buttons/slider-buttons';
import { partners } from '@/db/partners';
import { Title } from '@/components/ui/title/title';

import 'swiper/css';
import 'swiper/css/navigation';
import style from './partners-section.module.scss';

export const PartnersSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <Title text={t('Partners')}></Title>
          <SliderButtons indicator={'partners'} />
        </div>
        <Swiper
          className={style.sliderBlock}
          modules={[Navigation, Autoplay]}
          spaceBetween={55}
          navigation={{
            nextEl: '.next-partners',
            prevEl: '.prev-partners',
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 55,
            },
          }}
        >
          {partners.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src.photo}
                alt={`slide ${index + 1}`}
                width={100}
                height={100}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
