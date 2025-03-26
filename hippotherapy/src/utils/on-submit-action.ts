import { IDataEmail } from '@/types/interfaces';

const onSubmitAction = async (formdata: FormData): Promise<IDataEmail> => {
  return {
    email: formdata.get('email') as string,
  };
};
export default onSubmitAction;
