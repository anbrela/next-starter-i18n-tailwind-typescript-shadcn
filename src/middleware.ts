import createMiddleware from 'next-intl/middleware';
import { defaultLocales } from './shared/consts/config';
 
export default createMiddleware({
  locales: defaultLocales,
 
  // Used when no locale matches
  defaultLocale: defaultLocales[0]
});
 
export const config = {
    // Match only internationalized pathnames
    matcher: [
      '/',
      `/:locale(${defaultLocales.join('|')})/:path*`
    ]
  };