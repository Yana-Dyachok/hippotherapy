import type { StaticImageData } from 'next/image';

export interface ILanguageState {
  language: string;
}

export interface IDataEmail {
  email: string;
}

export interface IDataItem {
  photo: StaticImageData;
  title: string;
  subTitle: string;
}
