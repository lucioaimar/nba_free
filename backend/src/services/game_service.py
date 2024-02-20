from datetime import datetime
import requests
from humps import decamelize

from src.models.game_model import ScheduleGameList, ScheduleList

url = "https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json"
date_format = "%m/%d/%Y %H:%M:%S"


async def get_team_schedule(team_id: str) -> ScheduleGameList:
    response = requests.get(url)
    schedules = response.json()["leagueSchedule"]["gameDates"]
    schedules_model = ScheduleList(decamelize(schedules))
    list_games = []
    for sch in schedules_model.root:
        for g in sch.games.root:
            if (g.home_team.team_id == team_id or
                    g.away_team.team_id == team_id):
                list_games.append(g)
    list_games_model = ScheduleGameList(list_games)
    return list_games_model


async def get_schedule_by_day(date: datetime) -> ScheduleList:
    response = requests.get(url)
    schedules = response.json()["leagueSchedule"]["gameDates"]
    schedules_model = ScheduleList(decamelize(schedules))
    date = date.replace(
        hour=0, minute=0, second=0).strftime(date_format)
    list_games = [g for g in schedules_model.root if g.game_date == date]
    list_games_model = ScheduleList(list_games)
    return list_games_model
