import psycopg
from psycopg.rows import dict_row

from app.config import settings

def get_connection():
    return psycopg.connect(
        host=settings.POSTGRES_HOST,
        port=settings.POSTGRES_PORT,
        dbname=settings.POSTGRES_DB,
        user=settings.POSTGRES_USER,
        password=settings.POSTGRES_PASSWORD,
        row_factory=dict_row,
    )