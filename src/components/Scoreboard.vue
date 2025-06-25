<template>
  <v-container fluid class="fill-height bg-surface">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex align-stretch justify-center">
        <v-col
          v-for="team in store.teams"
          :key="team.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            class="fill-height d-flex flex-column"
            :title="team.name"
            variant="tonal"
          >
            <v-card-text class="flex-grow-1">
              <div class="text-h1 font-weight-bold">{{ team.score }}</div>
            </v-card-text>

            <v-card-actions class="pa-4">
              <v-row dense>
                <v-col v-for="points in [1, 2, 3, 4, 5]" :key="points" cols="6" sm="4">
                  <v-btn
                    color="primary"
                    variant="elevated"
                    block
                    @click="store.updateScore(team.id, points)"
                  >
                    +{{ points }}
                  </v-btn>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-btn
                    color="error"
                    variant="elevated"
                    block
                    @click="store.updateScore(team.id, -1)"
                  >
                    -1
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>

    <v-footer app class="d-flex justify-center">
      <v-btn @click="store.showSetup" class="mx-2">설정으로</v-btn>
      <v-btn @click="resetAll" color="warning" class="mx-2">초기화</v-btn>
    </v-footer>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app"

const store = useAppStore()

function resetAll() {
  store.resetScores()
  store.clearStorage()
}
</script> 