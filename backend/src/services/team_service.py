from http.client import HTTPException
from typing import List
from pydantic import TypeAdapter
from nba_api.stats.endpoints import teaminfocommon, teamdetails
from nba_api.stats.static import teams

from src.models.team_model import TeamCommon, TeamSimple


async def get_team_details(team_id: str):
    team = teamdetails.TeamDetails(team_id).get_normalized_dict()
    return team


async def get_team_by_id(team_id: str) -> TeamCommon:
    team = teaminfocommon.TeamInfoCommon(team_id).get_normalized_dict()[
        'TeamInfoCommon']
    if(team[0]):
        return TypeAdapter(TeamCommon).validate_python(team[0])
    else:
        raise HTTPException(status_code=404, detail="Item not found")


async def get_all_teams() -> List[TeamSimple]:
    teamList = TypeAdapter(List[TeamSimple]).validate_python(teams.get_teams())
    return teamList
