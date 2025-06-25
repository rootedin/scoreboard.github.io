<template>
  <v-app>
    <v-main>
      <Setup v-if="store.activeView === 'setup'" />
      <Scoreboard v-else />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import Setup from './components/Setup.vue';
import Scoreboard from './components/Scoreboard.vue';
import { onMounted } from 'vue';

const store = useAppStore();

onMounted(() => {
  store.loadFromStorage();
});
</script>
