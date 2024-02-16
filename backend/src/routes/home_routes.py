from fastapi import APIRouter
from src.models.home_model import GameScoreboardList
from src.services.home_service import get_scoreboard_games, get_boxscore, get_league_leaders

router = APIRouter(
    prefix="/home",
    tags=["home"],
)


@router.get("/scoreboard", response_model=GameScoreboardList)
async def get_scoreboard():
    games = get_scoreboard_games()
    return games.model_dump(by_alias=True)


@router.get("/boxscore")
async def boxscore_by_game(game_id: str):
    boxscore = get_boxscore(game_id)
    return boxscore.model_dump(by_alias=True)


@router.get("/league_leaders")
async def league_leaders(stat_category: str = 'PTS', top: int = 10,
                         per_mode: str = 'PerGame'):
    return get_league_leaders(stat_category, top, per_mode)
