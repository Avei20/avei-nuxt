<template>
    <VDialog v-model="chatStore.isWantToCreate" persistent max-width="290">
        <VCard>
            <VCardTitle color="primary" class="headline">Username and Gemini Limiter</VCardTitle>
            <VCardText>
                <VTextField
                    density="compact"
                    variant="outlined"
                    v-model="appStore.username"
                    label="Username"
                    required
                ></VTextField>
            </VCardText>
            <VSlider class="px-4"
                label="Harmful Content"

            />
            <VCardActions class="d-flex justify-end">
                <VBtn color="primary" @click="startChat">Start Chat</VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
</template>

<script setup lang="ts">
const appStore = useAppStore()
const chatStore = useChatStore()
const startChat = () => {
    // Post the configuration bot to the server

}
</script>