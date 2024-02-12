from fastapi import APIRouter
from src.services import player_service

router = APIRouter(
    prefix="/players",
    tags=["players"],
)


@router.get("/get_players")
async def get_players():
    return await player_service.get_players()
