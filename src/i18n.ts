import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { defaultLocales } from './shared/consts/config';

 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!defaultLocales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`config/locales/${locale}.json`)).default
  };
});