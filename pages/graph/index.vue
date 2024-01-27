<template>
    <SigmaContainer :graph="graph" :settings="settings"/>
    <VNavigationDrawer/>
    <!-- <VNavigationDrawer width="400" v-model="drawer" location="right">
        <VList>    
            <VListItem>
                <VChip>Nodes ({{ graph.nodes().length  }})</VChip>
            </VListItem>
            <VListItem>
                <VChip>Edges ({{ graph.edges().length }})</VChip>
            </VListItem>
        </VList>
    </VNavigationDrawer>
    <VLayoutItem position="top" size="88" class="text-end pointer-event-none" model-value>
        <div class="ma-4">
            <VFabTransition>
                <VBtn  
                    color="primary" 
                    icon="mdi-menu"
                    elevation="8"
                    @click="drawer = !drawer"/>
            </VFabTransition>
        </div>
    </VLayoutItem>
    <VLayoutItem
        size="89"
        class="pointer-event-none"
        model-value
        position="bottom">
        <div class="ma-4">
            <VFabTransition>
                <VBtn 
                    color="primary" 
                    icon="mdi-chat"
                    elevation="8"
                    @click="chatStore.isWantToChat = true"/>
            </VFabTransition>
        </div>
    </VLayoutItem> -->
</template>
<script setup lang="ts">
import Graph from 'graphology';
import type { Settings } from 'sigma/settings';

const chatStore = useChatStore()

const drawer = ref(false)

const graph = ref(new Graph())
const settings = ref({} as Settings)

</script>