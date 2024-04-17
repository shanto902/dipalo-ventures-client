import { TNavItem } from './types';

export const navItems: TNavItem[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Residency',
    link: '/residency-program',
  },
  {
    label: 'Funds',
    children: [
      {
        label: 'Dipalo Ventures Fund I',
        link: '/funds/fund-1',
      },
      {
        label: 'Dipalo Heed Climate Fund II',
        link: '/funds/fund-2',
        children: [
          {
            label: 'Golden Visa',
            link: '/db',
          },
        ],
      },
    ],
  },
  {
    label: 'Our Portfolio',
    link: '/portfolio',
  },
  {
    label: 'Team',
    link: '/about-us',
  },
  {
    label: 'Media',
    link: '/media',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];
