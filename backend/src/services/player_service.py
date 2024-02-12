from nba_api.stats.static import players


async def get_players():
    playerList = players.get_active_players()
    return playerList
