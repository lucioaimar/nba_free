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
