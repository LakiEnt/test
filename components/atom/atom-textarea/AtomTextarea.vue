<template>
  <div class="flex flex-col-reverse">
    <label
        :for="name"
        class="group relative block w-full">
      {{label}}
        <textarea
            :id="name"
            v-model="modelValue"
            :name="name"
            :placeholder="placeholder"
            class="peer mt-3 h-[12.5rem] w-full resize-none  border px-7 py-4 text-14/150 outline-none transition-colors duration-200 hover:border-bg-blue-400"></textarea>
    </label>
  </div>
</template>

<script setup lang="ts">

import type {PropType} from "vue";
import {AtomInputTypes} from "~/components/atom/atom-input/atom-input.types";

const modelValue = defineModel({
  type: [String, Number] as PropType<string | number>,
})

defineProps({
  ...AtomInputTypes,

})
</script>