<template>
  <header class="bg-blue-400 sticky top-0">
    <div class="container flex items-center text-white text-24 transition-all duration-200 ease-in-out"
         :class="isExpanded ? 'py-4' : 'py-2'">
        <p class="mr-auto font-medium">Logo</p>
      <nav class="flex space-x-20">
        <NuxtLink
          v-for="link in links"
          :to="link.to"
          class="transition-opacity font-medium duration-300 hover:opacity-70"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">

const links = [
  {label: 'About', to: '/'},
  {label: 'Articles/Posts', to: '/'},
  {label: 'Products', to: '/'},
]

const isExpanded = ref(true)

function handleScroll() {
  isExpanded.value = !(window.scrollY > 50 && window.innerWidth >= 1400);
  // or more readable variant
  // if (window.scrollY > 50 && window.innerWidth >= 1400) {
  //   isExpanded.value = false
  // } else {
  //   isExpanded.value = true
  // }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>