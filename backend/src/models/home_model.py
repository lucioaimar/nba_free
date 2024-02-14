from enum import Enum
from datetime import datetime
from typing import List, Optional
from src.models.camelize import CamelModel

from pydantic import RootModel


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
    team_id: str
    team_name: str
    team_city: str
    team_tricode: str
    wins: int
    losses: int
    score: int


class GameScoreboard(CamelModel):
    game_id: str
    game_status: GameStatus
    period: int
    game_clock: str
    game_time_utc: datetime
    regulation_periods: int
    home_team: TeamSB
    away_team: TeamSB

class GameScoreboardList(RootModel):
    root: List[GameScoreboard]

class Arena(CamelModel):
    arena_id: int
    arena_name: str
    arena_city: str
    arena_state: str
    arena_country: str
    arena_timezone: str


class Official(CamelModel):
    person_id: int
    name: str
    name_i: str
    first_name: str
    family_name: str
    jersey_num: str
    assignment: str


class Period(CamelModel):
    period: int
    period_type: str
    score: int


class StatisticsPlayer(CamelModel):
    assists: int
    blocks: int
    blocks_received: int
    field_goals_attempted: int
    field_goals_made: int
    field_goals_percentage: float
    fouls_offensive: int
    fouls_drawn: int
    fouls_personal: int
    fouls_technical: int
    free_throws_attempted: int
    free_throws_made: int
    free_throws_percentage: float
    minus: int
    minutes: str
    minutes_calculated: str
    plus: int
    plus_minus_points: int
    points: int
    points_fast_break: int
    points_in_the_paint: int
    points_second_chance: int
    rebounds_defensive: int
    rebounds_offensive: int
    rebounds_total: int
    steals: int
    three_pointers_attempted: int
    three_pointers_made: int
    three_pointers_percentage: float
    turnovers: int
    two_pointers_attempted: int
    two_pointers_made: int
    two_pointers_percentage: float


class Player(CamelModel):
    status: str
    order: int
    person_id: int
    jersey_num: str
    position: Optional[str] = None
    not_playing_reason: Optional[str] = None
    not_playing_description: Optional[str] = None
    starter: str
    oncourt: str
    played: str
    statistics: StatisticsPlayer
    name: str
    name_i: str
    first_name: str
    family_name: str


class StatisticsTeam(CamelModel):
    assists: int
    assists_turnover_ratio: float
    bench_points: int
    biggest_lead: int
    biggest_lead_score: str
    biggest_scoring_run: int
    biggest_scoring_run_score: str
    blocks: int
    blocks_received: int
    fast_break_points_attempted: int
    fast_break_points_made: int
    fast_break_points_percentage: float
    field_goals_attempted: int
    field_goals_effective_adjusted: float
    field_goals_made: int
    field_goals_percentage: float
    fouls_offensive: int
    fouls_drawn: int
    fouls_personal: int
    fouls_team: int
    fouls_technical: int
    fouls_team_technical: int
    free_throws_attempted: int
    free_throws_made: int
    free_throws_percentage: float
    lead_changes: int
    minutes: str
    minutes_calculated: str
    points: int
    points_against: int
    points_fast_break: int
    points_from_turnovers: int
    points_in_the_paint: int
    points_in_the_paint_attempted: int
    points_in_the_paint_made: int
    points_in_the_paint_percentage: float
    points_second_chance: int
    rebounds_defensive: int
    rebounds_offensive: int
    rebounds_personal: int
    rebounds_team: int
    rebounds_team_defensive: int
    rebounds_team_offensive: int
    rebounds_total: int
    second_chance_points_attempted: int
    second_chance_points_made: int
    second_chance_points_percentage: float
    steals: int
    three_pointers_attempted: int
    three_pointers_made: int
    three_pointers_percentage: float
    time_leading: str
    times_tied: int
    true_shooting_attempts: float
    true_shooting_percentage: float
    turnovers: int
    turnovers_team: int
    turnovers_total: int
    two_pointers_attempted: int
    two_pointers_made: int
    two_pointers_percentage: float


class BoxTeam(CamelModel):
    team_id: str
    team_name: str
    team_city: str
    team_tricode: str
    score: int
    in_bonus: str
    timeouts_remaining: int
    periods: List[Period]
    players: List[Player]
    statistics: StatisticsTeam


class BoxscoreModel(CamelModel):
    game_id: str
    game_time_local: str
    game_time_utc: str
    game_time_home: str
    game_time_away: str
    game_et: str
    duration: int
    game_code: str
    game_status_text: str
    game_status: int
    regulation_periods: int
    period: int
    game_clock: str
    attendance: int
    sellout: str
    arena: Arena
    officials: List[Official]
    home_team: BoxTeam
    away_team: BoxTeam


