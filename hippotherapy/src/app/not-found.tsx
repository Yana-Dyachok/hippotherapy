import Button from '@/components/ui/button/button';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Ooops... Page not found</h1>
      <Button btnType="button" to="/">
        Back
      </Button>
    </div>
  );
};
export default NotFoundPage;
