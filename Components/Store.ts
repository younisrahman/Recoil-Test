import { atom } from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    userId: 10074,
    name: 'Younis Rahman',
  },
});
