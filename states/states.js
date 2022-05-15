import {atom, selector} from 'recoil';

const userData = atom({
  key: "userData",
  default: null,
});

const userStateChanger = selector({
  key: "userStateChanger",
  get: ({ get }) => {
    const user = get(userData);
    return user;
  },
});

export { userData, userStateChanger };