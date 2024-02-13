from http.client import HTTPException
from typing import List
from src.models.camelize import CamelModel
from pydantic import TypeAdapter
from nba_api.stats.endpoints import teaminfocommon, teamdetails
from nba_api.stats.static import teams

from src.models.team_model import TeamCommon, TeamSimple, TeamDetails


async def get_team_details(team_id: str) -> TeamDetails:
    team_details = teamdetails.TeamDetails(team_id).get_normalized_dict()
    team_model = TeamDetails(**team_details)
    return team_model


async def get_team_by_id(team_id: str) -> TeamCommon:
    team = teaminfocommon.TeamInfoCommon(team_id).get_normalized_dict()[
        'TeamInfoCommon'][0]
    if(team):
        return TeamCommon(**team)
    else:
        raise HTTPException(status_code=404, detail="Item not found")


async def get_all_teams() -> List[TeamSimple]:
    teamList = TypeAdapter(List[TeamSimple]).validate_python(teams.get_teams())
    return teamList
