<script setup lang="ts">
import { interval } from '@/helper';
import { getCurrentInstance, reactive, ref } from 'vue';

const count = ref(0)
const data = reactive({
    count
})

const instance = getCurrentInstance(); // return null?
const data2= new Proxy({count},{
    set(target: any, p, value, receiver): boolean {
        target[p].value = value
        instance?.proxy?.$forceUpdate();
        return true
    },
    get(target: any, p) {
        return target[p].value
    }
})

interval(data2)
</script>


<template>
    <h3>Composite Api (setup) V2: {{count}}</h3>

</template>