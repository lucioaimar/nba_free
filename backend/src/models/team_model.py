from typing import Any, List, Optional 
from src.models.camelize import CamelModel


class TeamSimple(CamelModel):
    id: str
    full_name: str
    abbreviation: str
    nickname: str
    city: str
    state: str
    year_founded: int


class TeamCommon(CamelModel):
    TEAM_ID: str
    SEASON_YEAR: str
    TEAM_CITY: str
    TEAM_NAME: str
    TEAM_ABBREVIATION: str
    TEAM_CONFERENCE: str
    TEAM_DIVISION: str
    TEAM_CODE: str
    W: int
    L: int
    PCT: float
    CONF_RANK: int
    DIV_RANK: int
    MIN_YEAR: int
    MAX_YEAR: int




class TeamBackgroundItem(CamelModel):
    TEAM_ID: int
    ABBREVIATION: str
    NICKNAME: str
    YEARFOUNDED: int
    CITY: str
    ARENA: str
    ARENACAPACITY: str
    OWNER: str
    GENERALMANAGER: str
    HEADCOACH: str
    DLEAGUEAFFILIATION: str


class TeamHistoryItem(CamelModel):
    TEAM_ID: int
    CITY: str
    NICKNAME: str
    YEARFOUNDED: int
    YEARACTIVETILL: int


class TeamSocialSite(CamelModel):
    ACCOUNTTYPE: str
    WEBSITE_LINK: str


class TeamAwardsChampionship(CamelModel):
    YEARAWARDED: int
    OPPOSITETEAM: str


class TeamAwardsDivItem(CamelModel):
    YEARAWARDED: int
    OPPOSITETEAM: Any


class TeamHofItem(CamelModel):
    PLAYERID: int
    PLAYER: str
    POSITION: str
    JERSEY: Any
    SEASONSWITHTEAM: str | None
    YEAR: int


class TeamRetiredItem(CamelModel):
    PLAYERID: Optional[int]
    PLAYER: str
    POSITION: str
    JERSEY: str
    SEASONSWITHTEAM: str | None
    YEAR: Optional[int]


class TeamDetails(CamelModel):
    TeamBackground: List[TeamBackgroundItem]
    TeamHistory: List[TeamHistoryItem]
    TeamSocialSites: List[TeamSocialSite]
    TeamAwardsChampionships: List[TeamAwardsChampionship]
    TeamAwardsConf: List
    TeamAwardsDiv: List[TeamAwardsDivItem]
    TeamHof: List[TeamHofItem]
    TeamRetired: List[TeamRetiredItem]

