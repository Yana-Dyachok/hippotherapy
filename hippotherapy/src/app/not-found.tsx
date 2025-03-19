import { Button } from '@/components/ui/button/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Ooops... Page not found</h1>
      <Link href="/" passHref>
        <Button btnType="button" color="dark">
          Back
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
