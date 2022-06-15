<script lang="ts">
import { interval } from '@/helper';
import { defineComponent } from 'vue';
export default defineComponent({
    data(){
        return {
            count: 0 
        }
    },
    mounted(){
        interval(this.$data)
    }
})


</script>


<template>
    <h3>Option Api: {{count}}</h3>

</template>