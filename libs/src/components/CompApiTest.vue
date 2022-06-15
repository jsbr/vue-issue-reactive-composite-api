<script setup lang="ts">
import { interval } from '@/helper';
import { reactive } from 'vue';


const data = reactive({
    count: 0
})

interval(data)
</script>


<template>
    <h3>Composite Api (setup): {{data.count}}</h3>

</template>