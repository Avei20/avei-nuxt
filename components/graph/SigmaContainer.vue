<template>
    <div 
        ref="container" 
        class="container" 
        width="100%" 
        height="100%" 
        @mouseup="onMouseUp"
        @mousedown="onMouseDown"
        @mousemovebody="onMoveBody"
        @downNode="onDownNode">
    </div>
</template>

<script setup lang="ts">
import type Graph from 'graphology';
import type { Settings } from 'sigma/settings';
import ForceSupervisor from 'graphology-layout-force/worker'
import Sigma from 'sigma';

interface Props {
    graph: Graph,
    settings: Settings
}

const props = defineProps<Props>()

const container = ref()

const sigma = ref()

// Stating for Graph Interaction
const isDragging = ref(false)
const draggedNode = ref()

const layout = new ForceSupervisor(props.graph, {})

const onDownNode = (e: { node: any}) => {
    isDragging.value = true
    draggedNode.value = e.node
    props.graph.setNodeAttribute(draggedNode.value, 'highlighted', true)
}

const onMoveBody = (e: { preventSigmaDefault: () => void; original: { preventDefault: () => void; stopPropagation: () => void; }; }) => {
    if (!isDragging.value || !draggedNode.value) return

    const pos = sigma.value.viewportToGraph(e)
    props.graph.setNodeAttribute(draggedNode.value, 'x', pos.x)
    props.graph.setNodeAttribute(draggedNode.value, 'y', pos.y)

    e.preventSigmaDefault()
    e.original.preventDefault()
    e.original.stopPropagation()
}

const onMouseUp = () => {
    if (draggedNode.value) props.graph.removeNodeAttribute(draggedNode.value, 'highlighted')
    isDragging.value = false
    draggedNode.value = null
}

const onMouseDown = () => {
    if (!sigma.value.getCustomBBox()) sigma.value.setCustomBBox(sigma.value.getBBox())
}
onMounted(() => {
    layout.start()

    sigma.value = new Sigma(props.graph, container.value, props.settings)
})

</script>

<style>
.container {
    position: fixed;
    width: 100vw;
    height: 100vh;
}
</style>
