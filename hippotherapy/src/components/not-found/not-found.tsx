import { Button } from '@/components/ui/button/button';
import Link from 'next/link';
import style from './not-found.module.scss';

const NotFoundContent = () => {
  return (
    <div className={style.block}>
      <div className={style.wrapper}>
        <h1>Ooops... Page not found</h1>
        <Link href="/" passHref>
          <Button btnType="button" color="dark">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundContent;
