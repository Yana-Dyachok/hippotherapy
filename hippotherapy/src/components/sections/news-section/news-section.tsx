'use client';

import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { news } from '@/db/news';
import { NewsItem } from '@/components/ui/news-item/news-item';
import { SliderButtons } from '@/components/ui/slider-buttons/slider-buttons';
import { Title } from '@/components/ui/title/title';

import 'swiper/css';
import 'swiper/css/navigation';
import style from './news-section.module.scss';

export const NewsSection = () => {
  const { t } = useTranslation();
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <Title className={style.title} text={t('News')}></Title>
          <SliderButtons indicator={'news'} />
        </div>
        <div className={style.sliderBlock}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            navigation={{
              nextEl: '.next-news',
              prevEl: '.prev-news',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1240: {
                slidesPerView: 2,
              },
            }}
          >
            {news.map((data, index) => (
              <SwiperSlide key={index}>
                <NewsItem data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
