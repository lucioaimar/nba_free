from http.client import HTTPException
from typing import List
from pydantic import TypeAdapter
from nba_api.stats.endpoints.teamdetails import TeamDetails
from nba_api.stats.endpoints.teaminfocommon import TeamInfoCommon
from nba_api.stats.static import teams
from humps import depascalize

from src.models.team_model import TeamCommon, TeamDetailsModel, TeamSimple


async def get_team_details(team_id: str) -> TeamDetails:
    team_details = depascalize(TeamDetails(team_id).get_normalized_dict())
    print(team_details)
    team_model = TeamDetailsModel(**team_details)
    return team_model


async def get_team_by_id(team_id: str) -> TeamCommon:
    team = TeamInfoCommon(team_id).get_normalized_dict()[
        'TeamInfoCommon'][0]
    if (team):
        return TeamCommon(**team)
    else:
        raise HTTPException(status_code=404, detail="Item not found")


async def get_all_teams() -> List[TeamSimple]:
    teamList = TypeAdapter(List[TeamSimple]).validate_python(teams.get_teams())
    return teamList
