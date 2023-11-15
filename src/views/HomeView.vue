<template>
  <div class="tw-h-screen tw-w-full tw-bg-black tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-5 text-white">
    <h1 class="tw-text-xl tw-font-bold">Home</h1>

    <button @click="onClickHandler" class="tw-px-4 tw-py-2 tw-rounded-md tw-text-white tw-bg-purple-500">Say Hello</button>

  </div>
</template>

<script setup>
import useAlert from '@/composables/useAlert';
import { ref } from 'vue';
const id = ref(1);

const onClickHandler = () => {
  if(id.value == 1) {
    useAlert('Hello Ilyass', 'info');
  }

  if(id.value == 2) {
    useAlert('Hello Yassine', 'danger');
  }

  if(id.value == 3) {
    useAlert('Hello Ahmed', 'warning');
  }

  if(id.value == 4) {
    useAlert('Hello Ali', 'success');
  }

  if (id.value == 4) {
    id.value = 1
  } else {
    id.value++
  }
}
</script>
