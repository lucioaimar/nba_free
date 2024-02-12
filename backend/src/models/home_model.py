from enum import Enum
from datetime import datetime
from typing import List

from src.models.camelize import CamelModel


class GameStatus(Enum):
    NOT_STARTED = 0
    PREGAME = 1
    PLAYING = 2
    ENDED = 3

class StatCategoryAbbreviation:
    pts = 'PTS'
    fgm = 'FGM'
    fga = 'FGA'
    fg_pct = 'FG_PCT'
    fg3m = 'FG3M'
    fg3a = 'FG3A'
    fg3_pct = 'FG3_PCT'
    ftm = 'FTM'
    fta = 'FTA'
    oreb = 'OREB'
    dreb = 'DREB'
    ast = 'AST'
    stl = 'STL'
    blk = 'BLK'
    tov = 'TOV'
    reb = 'REB'


class TeamSB(CamelModel):
    teamId: str
    teamName: str
    teamCity: str
    teamTricode: str
    wins: int
    losses: int
    score: int


class GameScoreboard(CamelModel):
    gameId: str
    gameStatus: GameStatus
    period: int
    gameClock: str
    gameTimeUTC: datetime
    regulationPeriods: int
    homeTeam: TeamSB
    awayTeam: TeamSB


