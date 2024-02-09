import { dashboard, logout, wallet, profile, history, cart } from '../assets';

export const navlinks = [
  {
    name: 'Dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Cart',
    imgUrl: cart,
    link: "/cart"
  },
  {
    name: 'Wallet',
    imgUrl: wallet,
    link: '/wallet',
  },
  {
    name: 'History',
    imgUrl: history,
    link: '/history',
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
