<template>
  <NuxtLayout>
      <NuxtPage/>
  </NuxtLayout>
  <VSnackbar
      v-model="appStore.snackbar.isShow"
      :timeout="3000"
      >
      {{ appStore.snackbar.message }}
      <template v-slot:actions>
        <VBtn
        @click="appStore.snackbar.isShow = false"
        variant="text"
        color="green">
          Ok
        </VBtn>
      </template>
    </VSnackbar>
</template>

<script setup lang="ts">
const appStore = useAppStore()
</script>