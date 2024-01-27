export const useChatStore = defineStore('chat', {
    state: () => ({
        isWantToChat: false,
        chatId: '',
        messages: [],
        isWantToCreate: false,
    }),

    actions: {
        mutateCreateChatDialog() {
            this.isWantToCreate = !this.isWantToCreate
        }
    }
})