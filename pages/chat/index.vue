
<template>
  <VCard class="mx-2 my-5" height="100%">
    <VCard class="h-100">
      <VCardTitle class="d-flex-column align-center" color="primary">
        <span class="d-flex mb-4 align-center justify-center text-h4">
          Avei Gemini
          <VIcon icon="mdi-robot" class="ml-4 w-auto"/>
        </span>
        <VAutocomplete 
          v-model="messageObject.aiModel"
          label="Select Model"
          no-data-text="No Model Available."
          class=" mt-2 align-self-center"
          @update:focused="fetchModel"
          :items="modelSelection"
          item-value="key"
          item-title="name"
          variant="outlined" 
          density="compact" />
          <VDivider></VDivider>
      </VCardTitle>
      <VCardText style="height: 400px; overflow-y: auto;">
        <VList two-line>
          <div v-for="message in messages" v-if="messages">
            <VListItem class="d-flex justify-space-between py-2" :key="message.id">
              <div>
                <span v-if="message.isUser" class="d-flex align-center">
                  <VIcon icon="mdi-account-circle" class="mr-2"/>
                  User
                </span>
                <span v-else class="d-flex align-center">
                  <VIcon icon="mdi-robot" class="mr-2"/>
                  Gemini
                </span>
              </div>
              <div v-html="marked(message.message)">
              </div>
            </VListItem>
          </div>
        </VList>
      </VCardText>
      <VDivider/>
      <VCardActions>
        <VTextField
          v-model="messageObject.message"
          variant="outlined"
          density="compact"
          label="Type your message"
          @keyup.enter="sendMessage"
          append-icon="mdi-send"
          @click:append="sendMessage"
        />
      </VCardActions>
    </VCard>
  </VCard>
  <!-- <ChatCreateDialog/> -->
</template>

<script setup lang="ts">
import { VTextField } from 'vuetify/lib/components/index.mjs';
import { ref, onMounted } from 'vue';
import { marked } from 'marked'
import { v4 as uuidv4 } from 'uuid';

const messages:any = ref([])
const aiModel = ref(null)
const userMessage= ref('')
const modelSelection = ref([]) // Initialize as empty array of type unknown
const { $socket } = useNuxtApp()
const messageObject = reactive({
  id: uuidv4(),
  message: '',
  date: new Date(),
  isUser: true,
  aiModel: null,
})

const appStore = useAppStore()
const chatStore = useChatStore()

const markedToHTML = (markdown: string) => {
  return marked(markdown)
}

const config = useRuntimeConfig()

const sendMessage = () => {
  if (!messageObject.message || !messageObject.aiModel) {
    return;
  }
  console.log("Sending Messagoeue")

  const msg = {
    id: messageObject.id,
    message: messageObject.message,
    date: messageObject.date,
    isUser: messageObject.isUser,
    aiModel: messageObject.aiModel,
  }
  $socket.emit('new message', msg)
  messages.value.push(msg)
  messageObject.message = ''
}

const  fetchModel = async() => {
  console.log('fetching model')
  const { data, pending, error }  = await useFetchApi('v1/chat')
  console.log('data')
  console.log(data)
  console.log(data.value)

  const response = data.value as any
  modelSelection.value = (response.data as never[]);
}


onBeforeMount(async () => {
  // Open Chat Dialog
  chatStore.isWantToCreate = true

  // Fetching list Model
  await fetchModel()
  console.log(config.public.API)
  // const { data } = await useFetchApi('/v1/chat',)
  // console.log(data.value)
  $socket.connect()
  console.log('Connection Establishedoeu')
  $socket.emit('join', { paleo: 'paleo', name: 'user'})

  $socket.on('new message', (msg:any) => {
    console.log('new message')
    console.log(msg)
    messages.value.push(msg)
  })
  
  $socket.on('exception', (msg:any) => {
    if (msg.status === 'error') {
      appStore.showSnackbar(msg.message)
    }  
  })
})

</script>

