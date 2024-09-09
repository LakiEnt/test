<script setup lang="ts">

import LayoutHeader from "~/components/layouts/LayoutHeader.vue";
</script>

<template>
  <Html>
    <Body>
      <div class="relative bg-red-50 flex min-h-screen flex-col">
        <LayoutHeader/>
        <slot />
      </div>
    </Body>
  </Html>
</template>

<style scoped>

</style>