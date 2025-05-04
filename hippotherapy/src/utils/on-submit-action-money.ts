import { IDataMoney } from '@/types/interfaces';

export const onSubmitActionMoney = async (
  formdata: FormData,
): Promise<IDataMoney> => {
  return {
    money: formdata.get('money') as string,
  };
};
