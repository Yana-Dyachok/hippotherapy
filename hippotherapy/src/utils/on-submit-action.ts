import { IData } from '@/types/interfaces';

const onSubmitAction = async (formdata: FormData): Promise<IData> => {
  return {
    email: formdata.get('email') as string,
  };
};
export default onSubmitAction;
