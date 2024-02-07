from fastapi import FastAPI
from nba_api.live.nba.endpoints import scoreboard, boxscore
from nba_api.stats.endpoints import leagueleaders, teaminfocommon, teamdetails
from nba_api.stats.static import teams, players
from typing import List
from pydantic import TypeAdapter
from typing_extensions import TypedDict
from enum import Enum
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8100",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TeamSimple(TypedDict, total=False):
    id: int
    full_name: str
    abbreviation: str
    nickname: str
    city: str
    state: str
    year_founded: int
    
class TeamCommon(TypedDict, total=False):
    TEAM_ID: int
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

    

class GameStatus(Enum):
    NOT_STARTED = 0
    PREGAME = 1
    PLAYING = 2
    ENDED = 3


class TeamSB(TypedDict, total=False):
    teamId: int
    teamName: str
    teamCity: str
    teamTricode: str
    wins: int
    losses: int
    score: int


class GameScoreboard(TypedDict, total=False):
    gameId: int
    gameStatus: GameStatus
    period: int
    gameClock: str
    gameTimeUTC: datetime
    regulationPeriods: int
    homeTeam: TeamSB
    awayTeam: TeamSB


@app.get("/")
async def root():
    return "Service healthy"


@app.get("/scoreboard")
async def scoreboard_home():
    games = scoreboard.ScoreBoard().games
    games_parsed = TypeAdapter(
        List[GameScoreboard]).validate_json(games.get_json())
    return games_parsed

@app.get("/boxscore")
async def boxscore_by_game(game_id: str):
    return boxscore.BoxScore(game_id).get_normalized_dict()


@app.get("/league_leaders")
async def league_leaders(stat_category: str, top: int = 10, per_mode: str = 'PerGame'):
    leaders: List = leagueleaders.LeagueLeaders(
        stat_category_abbreviation = stat_category,
        per_mode48 = per_mode
    ).get_normalized_dict()["LeagueLeaders"][:top]
    
    return leaders

@app.get("/get_all_teams")
async def get_all_teams() -> List[TeamSimple]:
    teamList = TypeAdapter(
        List[TeamSimple]).validate_python(teams.get_teams())
    return teamList

@app.get("/get_team_by_id")
async def get_team_by_id(team_id: int) -> TeamCommon:
    team = teaminfocommon.TeamInfoCommon(team_id).get_normalized_dict()['TeamInfoCommon']
    return TypeAdapter(TeamCommon).validate_python(team[0])

@app.get("/get_team_details")
async def get_team_details(team_id: int):
    team = teamdetails.TeamDetails(team_id).get_normalized_dict()
    return team;

@app.get("/get_players")
async def get_players():
    playerList = players.get_active_players()
    return playerList;





