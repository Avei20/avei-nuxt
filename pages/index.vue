<template>
    <VCard class="ma-5 d-flex flex-column justify-center align-center">
        <VAvatar image="@/assets/avei.jpg" size="80" class=""/>
        <VCardTitle color="primary" class="text-center font-bold">I am Avei</VCardTitle>
        <VCardItem class="">
            <VBtn class="mx-1" icon="mdi-github" density="compact" href="https://github.cob/Avei20"/>
            <VBtn class="mx-1" icon="mdi-linkedin" density="compact" href="https://www.linkedin.com/in/avei"/>
            <VBtn class="mx-1" icon="mdi-twitter" density="compact" href="https://twitter.com/avei__"/>
        </VCardItem>
        <VCardText class="text-center py-2">
            Here are a list of my production work which can be accessed by in my Github account.
        </VCardText>
        <VCardItem class="w-100">
            <VDivider/>
            <VBtn class="w-100 my-1" color="primary" to="/chat"> Gemini Chat </VBtn>
            <VBtn class="w-100 my-1" color="primary" href="https://nest.avei.ovh/"> Nest.js API Swagger Docs  </VBtn>
            <VBtn class="w-100 my-1" color="primary" href="https://echo.avei.ovh/"> Echo API Swagger Docs  </VBtn>
            <VBtn class="w-100 my-1" color="primary" href="https://elysia.avei.ovh/"> Elysia API Swagger Docs  </VBtn>
        </VCardItem>
        <VCardText>Fell free to give a feedback and hate comment here. Thanks. Your identity is anonymous. </VCardText>
        <VTextarea 
            class="my-1 w-100 mx-2 px-3" 
            variant="outlined" 
            density="compact" 
            label="Feedback"
            placeholder="Under development hehe. Still working on database to store the feedback. XD">
            
        </VTextarea>
        <VBtn class="mb-4" color="primary">Send</VBtn>
    </VCard>
</template>