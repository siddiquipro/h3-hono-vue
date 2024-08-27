<template>
  <main class="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-sm p-4">
    <div class="grid gap-4">
      <div>
        <h1 class="text-xl font-bold">{{ msg }}</h1>
        <p>This is a test app for nitro and hono</p>
      </div>

      <button class="btn" @click="count++">Count: {{ count }}</button>

      <button class="btn" @click="getServerData">Get Server Data</button>
      <code class="text-sm bg-gray-50 p-4">
        {{ serverData }}
      </code>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
const msg = "Hello World! 👋";
const count = ref(0);
const serverData = ref("");

const getServerData = async () => {
  const res = await fetch("/api/books");
  serverData.value = await res.json();
};
</script>
