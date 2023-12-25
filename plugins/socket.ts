import { io } from "socket.io-client"

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const socket = io(config.public.API || 'https://nest.avei.ovh', {
        autoConnect: false,
    })

    return {
        provide: {
            socket,
        }
    }
})