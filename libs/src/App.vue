<template>

  <h1>Libs</h1>
  <CompApiTest></CompApiTest>
  <CompApiTestV2></CompApiTestV2>
  <OptionApiTest></OptionApiTest>
  <OptionApiTestV2></OptionApiTestV2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CompApiTest from './components/CompApiTest.vue';
import CompApiTestV2 from './components/CompApiTestV2.vue';
import OptionApiTest from './components/OptionApiTest.vue';
import OptionApiTestV2 from './components/OptionApiTestV2.vue';

export default defineComponent({
  name: 'App',
  components: {
    CompApiTest,
    OptionApiTest,
    OptionApiTestV2,
    CompApiTestV2
  }
});
</script>

