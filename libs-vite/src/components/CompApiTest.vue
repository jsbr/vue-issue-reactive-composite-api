<script setup lang="ts">
import { reactive } from 'vue';


const data = reactive({
    count: 0
})

setInterval(()=>data.count++,1000);
</script>


<template>
    <h3>Vite Composite Api: {{data.count}}</h3>

</template>