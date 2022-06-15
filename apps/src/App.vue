<template>
  <h1>Apps</h1>
  <h2>cli</h2>
  <CompApiTest></CompApiTest>
  <CompApiTestV2></CompApiTestV2>
  <OptionApiTest></OptionApiTest>
  <OptionApiTestV2></OptionApiTestV2>

  <h2>vite</h2>
  <CompApiTestVite></CompApiTestVite>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {CompApiTest, OptionApiTest, OptionApiTestV2, CompApiTestV2} from 'test-lib';
import {CompApiTestVite} from 'test-lib-vite';

export default defineComponent({
  name: 'App',
  components: {
    CompApiTest,
    CompApiTestVite,
    OptionApiTest,
    CompApiTestV2,
    OptionApiTestV2
  }
});
</script>

