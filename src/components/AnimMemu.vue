<script lang="ts" setup>
import { Dots } from '@vicons/tabler'
import { ref, defineEmits } from 'vue'
import { NButton, NSpace, NCollapseTransition, NSwitch } from 'naive-ui'

let isCollapse = ref(false)
let isDots = ref(true)
const emit = defineEmits(['leaveMenu'])

let toggle = () => {
    isCollapse.value = !isCollapse.value
    isDots.value = !isDots.value
}
let enterMenu = () => {
    console.log("enter")
}
let leaveMenu = () => {
    emit('leaveMenu', () => {
        isCollapse.value = !isCollapse.value
    })
}


</script>

<template>
    <span class="dots" @mouseenter="toggle">
        <n-icon size="40" color="#F0ECFF">
            <Dots />
        </n-icon>
    </span>

    <span :show="isCollapse">
        <n-space justify="end">
            <n-button quaternary color="#F0ECFF">Home</n-button>
            <n-button quaternary color="#F0ECFF">Library</n-button></n-button>
            <n-button quaternary color="#F0ECFF">Friends</n-button>
        </n-space>
    </span>
</template>

<style scoped>
.n-icon {
    vertical-align: middle;
}

span {
    display: inline-block;
    height: 100%;
}
</style>