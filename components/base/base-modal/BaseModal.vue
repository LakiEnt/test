<template>
  <TransitionRoot appear as="template" :show="isOpen">
    <Dialog>
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/50 backdrop-blur" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
            class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
            <DialogPanel
                class="w-full min-h-[200px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <button
                  class="text-black group absolute right-4 top-4 p-1"
                  @click="closeModal">
                  <svg class="group-hover:opacity-70 duration-300 transition-opacity" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="currentColor"/>
                    <path d="M9.16986 15.5801C8.97986 15.5801 8.78986 15.5101 8.63986 15.3601C8.34986 15.0701 8.34986 14.5901 8.63986 14.3001L14.2999 8.64011C14.5899 8.35011 15.0699 8.35011 15.3599 8.64011C15.6499 8.93011 15.6499 9.41011 15.3599 9.70011L9.69986 15.3601C9.55986 15.5101 9.35986 15.5801 9.16986 15.5801Z" fill="currentColor"/>
                    <path d="M14.8299 15.5801C14.6399 15.5801 14.4499 15.5101 14.2999 15.3601L8.63986 9.70011C8.34986 9.41011 8.34986 8.93011 8.63986 8.64011C8.92986 8.35011 9.40986 8.35011 9.69986 8.64011L15.3599 14.3001C15.6499 14.5901 15.6499 15.0701 15.3599 15.3601C15.2099 15.5101 15.0199 15.5801 14.8299 15.5801Z" fill="currentColor"/>
                  </svg>
              </button>
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<script setup lang="ts">
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
import type {PropType} from "vue";

defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emits = defineEmits(['close'])

function closeModal() {
  emits('close')
}
</script>

