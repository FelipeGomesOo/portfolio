import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';

export default createMiddleware({ 
  defaultLocale: 'pt',
  localePrefix,
  locales,
  pathnames
});
 
export const config = { 
  matcher: ['/', '/(en|pt)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};