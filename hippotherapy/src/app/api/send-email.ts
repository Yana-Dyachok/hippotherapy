import { IData } from '@/types/interfaces';
import { URL_EMAIL } from '../../../next.config';

export const sendEmail = async (data: IData): Promise<'Success' | ''> => {
  const response = await fetch(URL_EMAIL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });

  if (response.ok) return 'Success';
  else {
    return '';
  }
};
