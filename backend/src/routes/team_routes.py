from fastapi import APIRouter
from src.services import team_service

router = APIRouter(
    prefix="/team",
    tags=["team"],
)


@router.get("/get_all")
async def get_all_teams():
    return await team_service.get_all_teams()


@router.get("/get_by_id")
async def get_team_by_id(team_id: str):
    return await team_service.get_team_by_id(team_id)


@router.get("/get_details")
async def get_team_details(team_id: str):
    return await team_service.get_team_details(team_id)
