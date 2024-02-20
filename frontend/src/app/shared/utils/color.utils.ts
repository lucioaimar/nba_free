export function getBackgroundColorTeam(teamAbv: string):string{
    const teamsBg: BgMap = {
        ATL: 'bg-ATL',
        BOS: 'bg-BOS',
        CLE: 'bg-CLE',
        NOP: 'bg-NOP',
        CHI: 'bg-CHI',
        DAL: 'bg-DAL',
        DEN: 'bg-DEN',
        GSW: 'bg-GSW',
        HOU: 'bg-HOU',
        LAC: 'bg-LAC',
        LAL: 'bg-LAL',
        MIA: 'bg-MIA',
        MIL: 'bg-MIL',
        MIN: 'bg-MIN',
        BKN: 'bg-BKN',
        NYK: 'bg-NYK',
        ORL: 'bg-ORL',
        IND: 'bg-IND',
        PHI: 'bg-PHI',
        PHX: 'bg-PHX',
        POR: 'bg-POR',
        SAC: 'bg-SAC',
        SAS: 'bg-SAS',
        OKC: 'bg-OKC',
        TOR: 'bg-TOR',
        UTA: 'bg-UTA',
        MEM: 'bg-MEM',
        WAS: 'bg-WAS',
        DET: 'bg-DET',
        CHA: 'bg-CHA',
    };

    return teamsBg[teamAbv];
}

export function getTextTeam(teamAbv: string):string{
    const teamsBg: BgMap = {
        ATL: 'text-ATL',
        BOS: 'text-BOS',
        CLE: 'text-CLE',
        NOP: 'text-NOP',
        CHI: 'text-CHI',
        DAL: 'text-DAL',
        DEN: 'text-DEN',
        GSW: 'text-GSW',
        HOU: 'text-HOU',
        LAC: 'text-LAC',
        LAL: 'text-LAL',
        MIA: 'text-MIA',
        MIL: 'text-MIL',
        MIN: 'text-MIN',
        BKN: 'text-BKN',
        NYK: 'text-NYK',
        ORL: 'text-ORL',
        IND: 'text-IND',
        PHI: 'text-PHI',
        PHX: 'text-PHX',
        POR: 'text-POR',
        SAC: 'text-SAC',
        SAS: 'text-SAS',
        OKC: 'text-OKC',
        TOR: 'text-TOR',
        UTA: 'text-UTA',
        MEM: 'text-MEM',
        WAS: 'text-WAS',
        DET: 'text-DET',
        CHA: 'text-CHA',
    };

    return teamsBg[teamAbv];
}

interface BgMap {
    [key: string]: string
}