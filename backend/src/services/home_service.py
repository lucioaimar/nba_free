from typing import List
from nba_api.live.nba.endpoints.scoreboard import ScoreBoard
from nba_api.live.nba.endpoints.boxscore import BoxScore
from nba_api.stats.endpoints.leagueleaders import LeagueLeaders
from humps import decamelize

from src.models.home_model import GameScoreboardList, StatCategoryAbbreviation, BoxscoreModel


def get_scoreboard_games() -> GameScoreboardList:
    games = decamelize(ScoreBoard().games.get_dict())
    scoreboard = GameScoreboardList(games)
    return scoreboard


def get_boxscore(game_id: str):
    boxscore = decamelize(BoxScore(game_id).game.data)
    print(boxscore)
    boxscore_model = BoxscoreModel(**boxscore)
    return boxscore_model


def get_league_leaders(stat_category: StatCategoryAbbreviation, top: int,
                       per_mode: str):
    leaders: List = LeagueLeaders(
        stat_category_abbreviation=stat_category,
        per_mode48=per_mode
    ).get_normalized_dict()["LeagueLeaders"][:top]

    return leaders
