from typing import List
from nba_api.live.nba.endpoints.scoreboard import ScoreBoard 
from nba_api.live.nba.endpoints.boxscore import BoxScore 
from nba_api.stats.endpoints.leagueleaders import LeagueLeaders
from pydantic import TypeAdapter

from src.models.home_model import GameScoreboard, StatCategoryAbbreviation


def get_scoreboard_games():
    return ScoreBoard().games


def get_boxscore(game_id: str):
    boxscore = BoxScore(game_id)
    print(boxscore.game.data);
    return boxscore.game.data


def get_league_leaders(stat_category: StatCategoryAbbreviation, top: int,
                             per_mode: str):
    leaders: List = LeagueLeaders(
        stat_category_abbreviation=stat_category,
        per_mode48=per_mode
    ).get_normalized_dict()["LeagueLeaders"][:top]

    return leaders
