
from typing import List

from pydantic import RootModel
from src.models.camelize import CamelModel


class ScheduleTeam(CamelModel):
    team_id: str
    team_name: str
    team_city: str
    team_tricode: str
    team_slug: str
    wins: int
    losses: int
    score: int
    seed: int


class ScheduleGame(CamelModel):
    game_id: str
    game_code: str
    game_status: int
    game_status_text: str
    game_sequence: int
    game_date_est: str
    game_time_est: str
    game_date_time_est: str
    game_date_utc: str
    game_time_utc: str
    game_date_time_utc: str
    away_team_time: str
    home_team_time: str
    day: str
    month_num: int
    week_number: int
    week_name: str
    if_necessary: bool
    series_game_number: str
    series_text: str
    arena_name: str
    arena_state: str
    arena_city: str
    postponed_status: str
    branch_link: str
    game_subtype: str
    home_team: ScheduleTeam
    away_team: ScheduleTeam


class ScheduleGameList(RootModel):
    root: List[ScheduleGame]


class Schedule(CamelModel):
    game_date: str
    games: ScheduleGameList


class ScheduleList(RootModel):
    root: List[Schedule]
