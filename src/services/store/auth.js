import create from 'zustand';

export const useAuthStore = create(set => ({
  user: {},
  setUser: props =>
    set(state => ({
      user: {
        ...state.user,
        ...props,
      },
    })),
}));
