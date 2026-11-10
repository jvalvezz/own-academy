from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from app.schemas.auth import LoginRequest, RegisterRequest
from app.services import auth_service

app = FastAPI(title="Own Academy API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "online"}


@app.post("/auth/register", status_code=status.HTTP_201_CREATED)
def register(data: RegisterRequest):
    try:
        user = auth_service.register(data.nome, data.email, data.password)

        return {
            "message": "Usuário criado com sucesso.",
            "user": user,
        }

    except auth_service.EmailAlreadyExistsError as error:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(error),
        )

    except auth_service.DefaultProfileNotFoundError:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Não foi possível configurar o perfil do novo usuário.",
        )


@app.post("/auth/login")
def login(data: LoginRequest):
    try:
        token = auth_service.login(data.email, data.password)

        return {
            "access_token": token,
            "token_type": "Bearer",
        }

    except auth_service.InvalidCredentialsError as error:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(error),
        )
