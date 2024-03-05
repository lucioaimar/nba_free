from nba_api.stats.endpoints.leaguestandingsv3 import LeagueStandingsV3
from humps import depascalize

from src.models.standings_model import StandingList


async def get_standings() -> StandingList:
    standings = depascalize(
        LeagueStandingsV3().get_normalized_dict()["Standings"])
    standings = standings = [{key.lower(): val for key, val in standing.items()}
                             for standing in standings]
    standings_model = StandingList(standings)
    return standings_model
