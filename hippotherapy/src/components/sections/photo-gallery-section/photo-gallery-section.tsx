'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { SliderButtons } from '@/components/ui/slider-buttons/slider-buttons';
import { images } from '@/db/photos';
import { Title } from '@/components/ui/title/title';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import style from './photo-gallery-section.module.scss';

export const PhotoGallerySection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <Title text={t('PhotoGallery')}></Title>
          <SliderButtons indicator={'photo'} />
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          className={style.sliderBlock}
          spaceBetween={5}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          navigation={{
            nextEl: '.next-photo',
            prevEl: '.prev-photo',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className={style.swipeBlock}>
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
