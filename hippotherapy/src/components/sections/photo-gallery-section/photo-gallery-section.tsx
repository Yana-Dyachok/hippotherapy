'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { SliderButtons } from '@/components/ui/slider-buttons/slider-buttons';
import { images } from '@/db/photos';

import 'swiper/css';
import 'swiper/css/navigation';
import style from './photo-gallery-section.module.scss';

export const PhotoGallerySection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <h2 className={style.title}>{t('PhotoGallery')}</h2>
          <SliderButtons indicator={'photo'} />
        </div>
        <Swiper
          className={style.sliderBlock}
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={5}
          //loop={true}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.next-photo',
            prevEl: '.prev-photo',
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src.photo}
                alt={`slide ${index + 1}`}
                width={473}
                height={403}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
