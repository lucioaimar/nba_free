from fastapi import APIRouter
from src.models.player_model import PlayerList, PlayerSimpleList
from src.services import player_service

router = APIRouter(
    prefix="/player",
    tags=["player"],
)


@router.get("/get_simple", response_model=PlayerSimpleList)
async def get_players_simple() -> PlayerSimpleList:
    players = await player_service.get_players_simple()
    return players.model_dump(by_alias=True)


@router.get("", response_model=PlayerList)
async def get_players() -> PlayerList:
    players = await player_service.get_players()
    return players.model_dump(by_alias=True)
