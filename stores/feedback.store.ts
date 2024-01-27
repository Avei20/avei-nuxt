import { helpers, minLength, required } from "@vuelidate/validators";

export const useFeedbackStore = defineStore('feedback', {
    state: () => ({
        create: {
            message: '',
        },
        createRules: {
            message: {
                required: helpers.withMessage('Message is requeired to submit a feedback', required),
                minLength: helpers.withMessage('Message must be at least 10 characters', minLength(10))
            }
        }
    }),
    actions: {
        initCreate() {
            this.create.message = ''
        }
    }
})