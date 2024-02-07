export interface TeamSimple {
  id: number;
  full_name: string;
  abbreviation: string;
  nickname: string;
  city: string;
  state: string;
  year_founded: number;
}

export interface TeamInfo {
  TEAM_ID: number;
  SEASON_YEAR: string;
  TEAM_CITY: string;
  TEAM_NAME: string;
  TEAM_ABBREVIATION: string;
  TEAM_CONFERENCE: string;
  TEAM_DIVISION: string;
  TEAM_CODE: string;
  W: number;
  L: number;
  PCT: number;
  CONF_RANK: number;
  DIV_RANK: number;
  MIN_YEAR: number;
  MAX_YEAR: number;
}