// stores/app.ts
import { defineStore } from 'pinia'

export interface Team {
  id: number
  name: string
  score: number
}

export const useAppStore = defineStore('app', {
  state: () => ({
    teamCount: 2,
    teams: [] as Team[],
    activeView: 'setup' as 'setup' | 'scoreboard',
  }),
  actions: {
    initializeTeams() {
      if (this.teamCount > 0) {
        this.teams = Array.from({ length: this.teamCount }, (_, i) => ({
          id: i + 1,
          name: `팀 ${i + 1}`,
          score: 0,
        }))
        this.activeView = 'scoreboard'
      }
    },
    setTeamCount(count: number) {
      this.teamCount = count
    },
    updateScore(teamId: number, points: number) {
      const team = this.teams.find(t => t.id === teamId)
      if (team) {
        team.score += points
      }
    },
    resetScores() {
      this.teams.forEach(team => {
        team.score = 0
      })
    },
    showSetup() {
      this.activeView = 'setup'
    },
  },
}) 