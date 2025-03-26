'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { IDataItem } from '@/types/interfaces';
import style from './news-item.module.scss';

interface NewsItemProps {
  data: IDataItem;
}

export const NewsItem = ({ data }: NewsItemProps) => {
  const { t } = useTranslation();
  return (
    <figure className={style.figure}>
      <Image
        className={style.img}
        src={data.photo}
        alt={`slide ${data.title}`}
        width={576}
        height={288}
        priority
      />
      <figcaption className={style.figcaption}>
        <h3 className={style.titleNews}>{t(data.title)}</h3>
        <p className={style.subTitleNews}>{t(data.subTitle)}</p>
      </figcaption>
    </figure>
  );
};
