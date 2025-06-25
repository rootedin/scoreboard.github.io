<template>
  <v-footer
    app
    height="40"
  >
    <div 
      class="d-flex ga-2 ms-auto"
      style="position: absolute; left: 16px;"
    >
    {{ store.getTeamId }}팀
    </div> 
    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2025 새우물침례교회
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const store = useAppStore();

</script>
