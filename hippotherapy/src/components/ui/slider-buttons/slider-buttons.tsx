import { ChevronLeft, ChevronRight } from 'lucide-react';
import style from './slider-buttons.module.scss';

export const SliderButtons = ({ indicator }: { indicator: string }) => {
  return (
    <div className={style.sliderButtons}>
      <button
        className={`prev-${indicator} left-0 -translate-y-1/2 p-2 rounded-full shadow-md ${style.button}`}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className={`next-${indicator} absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full shadow-md ${style.button}`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
