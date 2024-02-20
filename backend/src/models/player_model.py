from typing import List, Optional
from pydantic import RootModel
from src.models.camelize import CamelModel


class PlayerSimple(CamelModel):
    id: str
    full_name: str
    first_name: str
    last_name: str
    is_active: bool


class PlayerSimpleList(RootModel):
    root: List[PlayerSimple]


class Player(CamelModel):
    person_id: str
    player_last_name: str
    player_first_name: str
    player_slug: str
    team_id: str
    team_slug: Optional[str]
    team_city: Optional[str]
    team_name: Optional[str]
    team_abbreviation: Optional[str]
    jersey_number: Optional[str]
    position: str
    height: str
    weight: str
    college: str
    country: str
    draft_year: Optional[int]
    draft_round: Optional[int]
    draft_number: Optional[int]
    roster_status: Optional[int]
    from_year: str
    to_year: str
    pts: Optional[float]
    reb: Optional[float]
    ast: Optional[float]
    stats_timeframe: str


class PlayerList(RootModel):
    root: List[Player]
