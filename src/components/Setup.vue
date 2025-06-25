<template>
  <v-container class="fill-height bg-surface-variant d-flex justify-center align-center">
    <v-card 
      class="mx-auto pa-4"
      max-width="400"
      title="스코어보드 설정">
      <v-card-text>
        <v-text-field
          v-model.number="teamCount"
          label="팀 개수"
          type="number"
          min="1"
          max="10"
          :rules="[rules.required, rules.min, rules.max]"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          color="primary"
          variant="elevated"
          block
          @click="startScoreboard"
        >
          시작하기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useAppStore } from "@/stores/app"

const store = useAppStore()

const teamCount = ref(store.teamCount)

// store.teamCount가 변경될 때마다 teamCount도 동기화
watch(() => store.teamCount, (val) => {
  teamCount.value = val
})

const rules = {
  required: (value: any) => !!value || '팀 개수를 입력해주세요.',
  min: (value: number) => value >= 1 || '팀은 최소 1개 이상이어야 합니다.',
  max: (value: number) => value <= 10 || '팀은 최대 10개까지 가능합니다.',
}

const startScoreboard = () => {
  if (teamCount.value >= 1 && teamCount.value <= 10) {
    store.setTeamCount(teamCount.value)
    store.initializeTeams()
  }
}
</script>
