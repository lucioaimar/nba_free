export interface PlayerSimple {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

export interface Player {
    personId: string
    playerLastName: string
    playerFirstName: string
    playerSlug: string
    teamId?: string
    teamSlug?: string
    isDefunct: number
    teamCity?: string
    teamName?: string
    teamAbbreviation?: string
    jerseyNumber: string
    position: string
    height: string
    weight: string
    college: string
    country: string
    draftYear?: number
    draftRound?: number
    draftNumber?: number
    rosterStatus?: number
    fromYear: string
    toYear: string
    pts?: number
    reb?: number
    ast?: number
    statsTimeframe: string
  }
