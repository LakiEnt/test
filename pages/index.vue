
<template>
  <div class="container">
    <table class="mt-10 w-full">
      <thead class="p-2">
        <tr class="bg-blue-300 [&>th]:border [&>th]:border-black [&>th]:p-2">
          <th scope="col">
            <button @click="isSorted=!isSorted" class="inline-flex items-center justify-between">
              index
              <svg :class="{'rotate-180':isSorted}" class="ml-2 transition-transform duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0001 21.2501C11.8101 21.2501 11.6201 21.1801 11.4701 21.0301L5.40012 14.9601C5.11012 14.6701 5.11012 14.1901 5.40012 13.9001C5.69012 13.6101 6.17012 13.6101 6.46012 13.9001L12.0001 19.4401L17.5401 13.9001C17.8301 13.6101 18.3101 13.6101 18.6001 13.9001C18.8901 14.1901 18.8901 14.6701 18.6001 14.9601L12.5301 21.0301C12.3801 21.1801 12.1901 21.2501 12.0001 21.2501Z" fill="#292D32"/>
                <path d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z" fill="#292D32"/>
              </svg>
            </button>

          </th>
          <th scope="col">title</th>
          <th scope="col">userId</th>
          <th scope="col">body</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="post in dataPosts" :key="post.id" class="odd:bg-[#E4F0F5FF] bg-gray-200 [&_td]:py-2 [&_td]:px-4 [&_td]:border [&_td]:border-black [&_th]:border [&_th]:border-black ">
            <th v-if="!isLoading" scope="row">
              {{post.id}}
            </th>
            <th v-else scope="row">
              <div class="h-10 bg-gray-200 rounded animate-pulse"></div>
            </th>

            <th v-if="!isLoading" scope="row">
              {{post.title}}
            </th>
            <th v-else scope="row">
              <div class="h-10 bg-gray-200 rounded animate-pulse"></div>
            </th>

            <th v-if="!isLoading" scope="row">
              {{post.userId}}
            </th>
            <th v-else scope="row">
              <div class="h-10 bg-gray-200 rounded animate-pulse"></div>
            </th>

            <th v-if="!isLoading" scope="row">
              {{post.body}}
            </th>
            <th v-else scope="row">
              <div class="h-10 bg-gray-200 rounded animate-pulse"></div>
            </th>
          </tr>
      </tbody>
      <tfoot class="p-2 bg-gray-200 border-black border">
        <tr>
          <th scope="row" colspan="2">Page: {{ page }}</th>
          <th scope="row" colspan="100%" class=" ">
            <div class="flex items-center justify-center space-x-4">
              <button class="inline-flex items-center p-3.5 rounded-2xl bg-blue-500 text-white" :disabled="page == 1 || isLoading" @click="page--" :class="page == 1 || isLoading ?'opacity-70 cursor-not-allowed':null">
                <svg class="text-white mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z" fill="currentColor"/>
                  <path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill="currentColor"/>
                </svg>
                Prev Page
                <svg v-show="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>

              <button class="inline-flex items-center p-3.5 rounded-2xl bg-blue-500 text-white" :disabled="page == 10 || isLoading" @click="page++" :class="page == 10 || isLoading ? 'opacity-70 cursor-not-allowed':null">
                Next Page
                <svg v-show="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg class="text-white ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4301 18.8201C14.2401 18.8201 14.0501 18.7501 13.9001 18.6001C13.6101 18.3101 13.6101 17.8301 13.9001 17.5401L19.4401 12.0001L13.9001 6.46012C13.6101 6.17012 13.6101 5.69012 13.9001 5.40012C14.1901 5.11012 14.6701 5.11012 14.9601 5.40012L21.0301 11.4701C21.3201 11.7601 21.3201 12.2401 21.0301 12.5301L14.9601 18.6001C14.8101 18.7501 14.6201 18.8201 14.4301 18.8201Z" fill="currentColor"/>
                  <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="currentColor"/>
                </svg>
              </button>

              <button @click="useModal.open('addPost')" class="inline-flex items-center p-3.5 rounded-2xl bg-blue-500 text-white">
                Add new post
                <svg class="ml-2 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="add">
                    <path id="Path 2" d="M17 12H7" stroke-width="1.5" stroke="currentColor" stroke-linecap="round"/>
                    <path id="Path 2_2" d="M12 17V7" stroke-width="1.5" stroke="currentColor" stroke-linecap="round"/>
                    <path id="Oval" fill-rule="evenodd" stroke-width="1.5"  clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor"/>
                  </g>
                </svg>
              </button>
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
    <BaseModal :is-open="useModal.modals['addPost']"
               @close="useModal.close('addPost')">
      <form @submit="createNewPost" class="">
        <p class="text-24 font-semibold"> Create new post </p>

        <div class="mt-10 flex flex-col space-y-5">
            <AtomInput v-model="newPost.title" label="Title" placeholder="Write your title"/>
            <AtomTextarea v-model="newPost.body" label="Body" placeholder="Write your body"/>
        </div>
        <div class="text-center mt-4">
          <button type="submit" class="inline-flex items-center p-3.5 rounded-2xl bg-blue-500 text-white">
            Submit form
          </button>
        </div>
      </form>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import BaseModal from "~/components/base/base-modal/BaseModal.vue";
import AtomInput from "~/components/atom/atom-input/AtomInput.vue";
import AtomTextarea from "~/components/atom/atom-textarea/AtomTextarea.vue";

import {useModalStore} from "~/store/modalStore";
import {usePostStore} from "~/store/postStore";

interface PostType {
  userId: number
  id?: number
  title: string
  body: string
}
const useModal = useModalStore()
const usePosts = usePostStore()

const page = ref(1)
const isLoading = ref(false)
const dataPosts = ref([])
const isSorted = ref(false)

async function initData() {
  const {data} = await useFetch<PostType[]>(
      `https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10`,
  )
  dataPosts.value = data.value
}


function syncWithStore(posts:[]) {
  usePosts.posts = posts
}

const newPost = ref<PostType>({
  title:'',
  body:'',
  userId: 1,
})

async function createNewPost() {
  const { data } = await useFetch(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        method: "POST",
        body: JSON.stringify(newPost.value),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
}

async function getPost() {
    const { data } = await useFetch<PostType[]>(
      `https://jsonplaceholder.typicode.com/posts?_page=${page.value}&_limit=10`, {
          onRequest() {
            isLoading.value = true
            usePosts.isLoading = true
          },

          onResponse() {
            isLoading.value = false
            usePosts.isLoading = false
          },
        }
  )
  dataPosts.value = data.value
  syncWithStore(dataPosts.value)
}


function sortById(posts) {
  if(isSorted.value){
    dataPosts.value = posts.sort((a, b) => a.id < b.id);
  }
  else{
    dataPosts.value = posts.sort((a, b) => a.id > b.id);

  }
}

initData()
watch(page, () => {
  getPost(),
  {
    immediate: true,
  }
})
watch(isSorted, () => {
  sortById(dataPosts.value)

})
</script>

<style scoped>

</style>