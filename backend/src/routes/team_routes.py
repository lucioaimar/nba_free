from src.models.team_model import TeamCommon, TeamDetailsModel
from fastapi import APIRouter
from src.services import team_service

router = APIRouter(
    prefix="/team",
    tags=["team"],
)


@router.get("/get_all")
async def get_all_teams():
    return await team_service.get_all_teams()


@router.get("/get_by_id", response_model=TeamCommon)
async def get_team_by_id(team_id: str):
    team = await team_service.get_team_by_id(team_id)
    return team.model_dump(by_alias=True)


@router.get("/get_details", response_model=TeamDetailsModel)
async def get_team_details(team_id: str):
    team_details = await team_service.get_team_details(team_id)
    return team_details.model_dump(by_alias=True)
