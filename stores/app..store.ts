import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    userId: '',
    username: '',
    messages: [],
    snackbar: {
        isShow: false,
        message: '',
    }
  }),
  actions: {
    showSnackbar(message: string) {
        this.snackbar.isShow = true;
        this.snackbar.message = message;
    }
  },
});
