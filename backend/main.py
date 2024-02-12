from fastapi import FastAPI
# CORS
from fastapi.middleware.cors import CORSMiddleware
from src.routes import team_routes, player_routes, home_routes

app = FastAPI()

app.include_router(team_routes.router)
app.include_router(player_routes.router)
app.include_router(home_routes.router)

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


@app.get("/")
async def root():
    return "Service healthy"
