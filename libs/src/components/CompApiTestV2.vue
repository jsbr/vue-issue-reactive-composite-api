<script setup lang="ts">
import { interval } from '@/helper';
import { getCurrentInstance, reactive, ref } from 'vue';

const count = ref(0)
const data = reactive({
    count
})
setInterval(()=>data.count++,1000);
// interval(data)
</script>


<template>
    <h3>Composite Api (setup) V2: {{count}}</h3>

</template>