from nba_api.stats.static import players
from nba_api.stats.endpoints.playerindex import PlayerIndex

from src.models.player_model import PlayerList, PlayerSimpleList


async def get_players_simple() -> PlayerSimpleList:
    player_list = PlayerSimpleList(players.get_active_players())
    return player_list


async def get_players() -> PlayerList:
    players = PlayerIndex(team_id_nullable=None).get_normalized_dict()[
        'PlayerIndex']
    players = [{key.lower(): val for key, val in player.items()}
               for player in players]
    players_model = PlayerList(players)
    return players_model
