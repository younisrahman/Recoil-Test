import { atom, selector } from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    userId: 10074,
    name: 'Younis Rahman',
  },
});

export const userStateNew = selector({
  key: 'newUser',
  get: ({ get }) => {
    const previousData = get(userState);
    const newState = {
      ...previousData,
      count: previousData.name.length,
    };
    return newState;
  },
});
