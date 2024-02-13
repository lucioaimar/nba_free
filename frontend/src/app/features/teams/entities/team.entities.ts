export interface TeamSimple {
  id: number;
  fullName: string;
  abbreviation: string;
  nickname: string;
  city: string;
  state: string;
  yearFounded: number;
}

export interface TeamInfo {
  teamId: string
  seasonYear: string
  teamCity: string
  teamName: string
  teamAbbreviation: string
  teamConference: string
  teamDivision: string
  teamCode: string
  w: number
  l: number
  pct: number
  confRank: number
  divRank: number
  minYear: number
  maxYear: number
}

export interface TeamDetails {
  teambackground: Teambackground[]
  teamhistory: Teamhistory[]
  teamsocialsites: Teamsocialsite[]
  teamawardschampionships: Teamawardschampionship[]
  teamawardsconf: Teamawardsconf[]
  teamawardsdiv: Teamawardsdiv[]
  teamhof: Teamhof[]
  teamretired: Teamretired[]
}

export interface Teambackground {
  teamId: number
  abbreviation: string
  nickname: string
  yearfounded: number
  city: string
  arena: string
  arenacapacity: string
  owner: string
  generalmanager: string
  headcoach: string
  dleagueaffiliation: string
}

export interface Teamhistory {
  teamId: number
  city: string
  nickname: string
  yearfounded: number
  yearactivetill: number
}

export interface Teamsocialsite {
  accounttype: string
  websiteLink: string
}

export interface Teamawardschampionship {
  yearawarded: number
  oppositeteam: string
}

export interface Teamawardsconf {
  YEARAWARDED: number
  OPPOSITETEAM: any
}

export interface Teamawardsdiv {
  yearawarded: number
  oppositeteam: any
}

export interface Teamhof {
  playerid: number
  player: string
  position: string
  jersey: any
  seasonswithteam: string
  year: number
}

export interface Teamretired {
  playerid?: number
  player: string
  position: string
  jersey: string
  seasonswithteam: string
  year: number
}
