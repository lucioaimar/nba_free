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
