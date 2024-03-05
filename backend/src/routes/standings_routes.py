from fastapi import APIRouter
from src.models.standings_model import StandingList
from src.services import standings_services

router = APIRouter(
    prefix="/standings",
    tags=["standings"],
)


@router.get("", response_model=StandingList)
async def get_players_simple():
    standings_details = await standings_services.get_standings()
    return standings_details.model_dump(by_alias=True)
