<script lang="ts">
import { interval } from '@/helper';
import { defineComponent } from 'vue';
export default defineComponent({
    data(){
        return {
            data:{
                count: 0 
            }
        }
    },
    mounted(){
        interval(this.data)
    }
})


</script>


<template>
    <h3>Option Api V2: {{data.count}}</h3>

</template>