import { grid_special_store, dashboard, logout, wallet, profile, history, cart } from '../assets';

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
    name: 'Grid Special Store',
    imgUrl: grid_special_store,
    link: '/grid-special-store',
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
