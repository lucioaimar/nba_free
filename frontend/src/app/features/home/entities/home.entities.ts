export interface Scoreboard {
  gameId: string;
  gameStatus: GameStatus;
  period: number;
  gameClock: string;
  gameTimeUTC: Date;
  regulationPeriods: number;
  homeTeam: TeamScoreboard;
  awayTeam: TeamScoreboard;
}

export enum GameStatus {
  PREGAME = 0,
  NOT_STARTED = 1,
  PLAYING = 2,
  FINAL = 3,
}

export interface TeamScoreboard {
  teamId: number;
  teamName: string;
  teamCity: string;
  teamTricode: string;
  wins: number;
  losses: number;
  score: number;
}



export enum StatAbbreviation {
  PTS = 'PTS',
  FGM = 'FGM',
  FGA = 'FGA',
  FG_PCT = 'FG_PCT',
  FG3M = 'FG3M',
  FG3A = 'FG3A',
  FG3_PCT = 'FG3_PCT',
  FTM = 'FTM',
  FTA = 'FTA',
  OREB = 'OREB',
  DREB = 'DREB',
  AST = 'AST',
  STL = 'STL',
  BLK = 'BLK',
  TOV = 'TOV',
  REB = 'REB',
}

export interface LeagueLeader {
  PLAYER_ID: number;
  RANK: number;
  PLAYER: string;
  TEAM_ID: number;
  TEAM: string;
  GP: number;
  MIN: number;
  FGM: number;
  FGA: number;
  FG_PCT: number;
  FG3M: number;
  FG3A: number;
  FG3_PCT: number;
  FTM: number;
  FTA: number;
  FT_PCT: number;
  OREB: number;
  DREB: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  TOV: number;
  PF: number;
  PTS: number;
  EFF: number;
  AST_TOV: number;
  STL_TOV: number;
}

export interface Boxscore {
  gameId: string
  gameTimeLocal: string
  gameTimeUtc: string
  gameTimeHome: string
  gameTimeAway: string
  gameEt: string
  duration: number
  gameCode: string
  gameStatusText: string
  gameStatus: GameStatus
  regulationPeriods: number
  period: number
  gameClock: string
  attendance: number
  sellout: string
  arena: Arena
  officials: Official[]
  homeTeam: HomeTeam
  awayTeam: AwayTeam
}

export interface Arena {
  arenaId: number
  arenaName: string
  arenaCity: string
  arenaState: string
  arenaCountry: string
  arenaTimezone: string
}

export interface Official {
  personId: number
  name: string
  nameI: string
  firstName: string
  familyName: string
  jerseyNum: string
  assignment: string
}

export interface HomeTeam {
  teamId: number
  teamName: string
  teamCity: string
  teamTricode: string
  score: number
  inBonus: string
  timeoutsRemaining: number
  periods: Period[]
  players: Player[]
  statistics: Statistics
}

export interface Period {
  period: number
  periodType: string
  score: number
}

export interface Player {
  status: string
  order: number
  personId: number
  jerseyNum: string
  position?: string
  starter: string
  oncourt: string
  played: string
  statistics: Statistics
  name: string
  nameI: string
  firstName: string
  familyName: string
  notPlayingReason?: string
  notPlayingDescription?: string
}

export interface Statistics {
  assists: number
  blocks: number
  blocksReceived: number
  fieldGoalsAttempted: number
  fieldGoalsMade: number
  fieldGoalsPercentage: number
  foulsOffensive: number
  foulsDrawn: number
  foulsPersonal: number
  foulsTechnical: number
  freeThrowsAttempted: number
  freeThrowsMade: number
  freeThrowsPercentage: number
  minus: number
  minutes: string
  minutesCalculated: string
  plus: number
  plusMinusPoints: number
  points: number
  pointsFastBreak: number
  pointsInThePaint: number
  pointsSecondChance: number
  reboundsDefensive: number
  reboundsOffensive: number
  reboundsTotal: number
  steals: number
  threePointersAttempted: number
  threePointersMade: number
  threePointersPercentage: number
  turnovers: number
  twoPointersAttempted: number
  twoPointersMade: number
  twoPointersPercentage: number
}

export interface AwayTeam {
  teamId: number
  teamName: string
  teamCity: string
  teamTricode: string
  score: number
  inBonus: string
  timeoutsRemaining: number
  periods: Period[]
  players: Player[]
  statistics: Statistics
}
