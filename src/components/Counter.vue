<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div
    class="mx-auto flex max-w-sm flex-col items-center space-y-4 rounded-xl border border-slate-100 bg-white p-6 shadow-md"
  >
    <div class="text-xl font-medium text-black">Vue + Tailwind Counter</div>
    <p class="font-mono text-3xl font-semibold text-slate-500">
      {{ count }}
    </p>
    <div class="flex space-x-2">
      <button
        class="cursor-pointer rounded-lg bg-rose-500 px-4 py-2 font-medium text-white transition-colors hover:bg-rose-600"
        @click="count--"
      >
        Decrement
      </button>
      <button
        class="cursor-pointer rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white transition-colors hover:bg-emerald-600"
        @click="count++"
      >
        Increment
      </button>
    </div>
  </div>
</template>
