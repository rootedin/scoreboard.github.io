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
        this.saveToStorage()
      }
    },
    setTeamCount(count: number) {
      this.teamCount = count
      this.saveToStorage()
    },
    updateScore(teamId: number, points: number) {
      const team = this.teams.find(t => t.id === teamId)
      if (team) {
        team.score += points
        this.saveToStorage()
      }
    },
    resetScores() {
      this.teams.forEach(team => {
        team.score = 0
      })
      this.saveToStorage()
    },
    showSetup() {
      this.activeView = 'setup'
      this.saveToStorage()
    },
    saveToStorage() {
      localStorage.setItem('scoreboard_teams', JSON.stringify(this.teams))
      localStorage.setItem('scoreboard_teamCount', String(this.teamCount))
      localStorage.setItem('scoreboard_activeView', this.activeView)
    },
    loadFromStorage() {
      const teams = localStorage.getItem('scoreboard_teams')
      const teamCount = localStorage.getItem('scoreboard_teamCount')
      const activeView = localStorage.getItem('scoreboard_activeView')
      if (teams) this.teams = JSON.parse(teams)
      if (teamCount) this.teamCount = Number(teamCount)
      if (activeView) this.activeView = activeView as 'setup' | 'scoreboard'
    },
    clearStorage() {
      localStorage.removeItem('scoreboard_teams')
      localStorage.removeItem('scoreboard_teamCount')
      localStorage.removeItem('scoreboard_activeView')
    },
  },
}) 