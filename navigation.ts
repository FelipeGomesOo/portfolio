import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'pt'] as const;
export const localePrefix = 'always'; 
export const pathnames = { 
  '/': '/', 
  '/about': {
    en: '/about',
    pt: '/sobre'
  },
  '/projects/[project]': {
    en: '/projects/[project]',
    pt: '/projetos/[project]'
  }, 
} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});