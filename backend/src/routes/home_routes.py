from typing import List
from fastapi import APIRouter
from pydantic import TypeAdapter
from src.models.home_model import GameScoreboard
from src.services.home_service import get_scoreboard_games, get_boxscore, get_league_leaders

router = APIRouter(
    prefix="/home",
    tags=["home"],
)


@router.get("/scoreboard")
async def get_scoreboard():
    games = get_scoreboard_games()
    validated_games = TypeAdapter(
        List[GameScoreboard]).validate_json(games.get_json())
    return validated_games


@router.get("/boxscore")
async def boxscore_by_game(game_id: str):
    return get_boxscore(game_id)


@router.get("/league_leaders")
async def league_leaders(stat_category: str = 'PTS', top: int = 10,
                             per_mode: str = 'PerGame'):
    return get_league_leaders(stat_category, top, per_mode)
