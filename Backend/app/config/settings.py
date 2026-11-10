import os
from dotenv import load_dotenv

load_dotenv()


def required(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Variável obrigatória não configurada: {name}")
    return value


POSTGRES_DB = required("POSTGRES_DB")
POSTGRES_USER = required("POSTGRES_USER")
POSTGRES_PASSWORD = required("POSTGRES_PASSWORD")
POSTGRES_HOST = required("POSTGRES_HOST")
POSTGRES_PORT = os.getenv("POSTGRES_PORT", "5432")

JWT_SECRET = required("JWT_SECRET")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
JWT_EXPIRES_MINUTES = int(os.getenv("JWT_EXPIRES_MINUTES", "60"))