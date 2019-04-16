import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Traditional BeeHives',
    group: true,
  },
  {
    title: 'Bee Hive',
    icon: 'nb-home',
    link: '/pages/beehives',
    children: [
      {
        title: 'BeeHives Details',
        link: '/pages/beehives',
      },
      {
        title: 'BeeHive IoT',
        link: '/pages/beehives/iot-metrics',
      },
    ],
  },
  {
    title: 'Bee Balls',
    group: true,
    home: true,
  },
  {
    title: 'BeeBall',
    icon: 'nb-e-commerce',
    link: '/pages/beeball',
    children: [
      {
        title: 'BeeBall Details',
        link: '/pages/beeball',
      },
      {
        title: 'BeeBall IoT',
        link: '/pages/beeball/iot-metrics',
      },
    ],
  },
  {
    title: 'Bee Cylinder',
    group: true,
  },
  {
    title: 'BeeCylinder',
    icon: 'nb-home',
    link: '/pages/beecylinder',
  },

  {
    title: 'Site Adminstration',
    group: true,
  },
  {
    title: 'Hive Admin',
    icon: 'nb-tables',
    children: [
      {
        title: 'Hive Reports',
        link: '/pages/hive-admin/report',
      },
      {
        title: 'add new hive Users',
        link: '/pages/hive-admin/useradmin',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
