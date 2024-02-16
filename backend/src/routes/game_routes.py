from datetime import datetime
from fastapi import APIRouter
from src.models.game_model import ScheduleGameList, ScheduleList
from src.services import game_service

router = APIRouter(
    prefix="/game",
    tags=["game"],
)


@router.get('/get_games_by_team', response_model=ScheduleGameList)
async def get_games_by_team(team_id: str):
    games = await game_service.get_team_schedule(team_id)
    return games.model_dump(by_alias=True)


@router.get('/get_schedule_by_day', response_model=ScheduleList)
async def get_schedule_by_day(date: datetime = datetime.today()):
    games = await game_service.get_schedule_by_day(date)
    return games.model_dump(by_alias=True)
