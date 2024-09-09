<template>
  <div class="flex flex-col-reverse">
    <input
        v-model="modelValue"
        v-bind="$attrs"
        :placeholder="placeholder"
        :name="name"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        class="peer mt-3 flex border-b border-blue bg-transparent pb-1.5 text-14/140 text caret-violet outline-none transition-colors hover:border-violet focus:border-violet lg:text-20/140" />
      <label
          :for="name"
          class="block text-12/140 text-blue peer-focus:text-violet lg:text-14/140">
        {{ label }}
      </label>
  </div>
</template>

<script setup lang="ts">

import { AtomInputTypes } from './atom-input.types';
import type {PropType} from "vue";

const modelValue = defineModel({
  type: [String, Number] as PropType<string | number>,
})

defineProps({
  ...AtomInputTypes,
})
</script>