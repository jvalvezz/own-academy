from app.db.connection import get_connection


def find_by_email(email: str):
    query = """
        SELECT id, email, password_hash, ativo
        FROM users
        WHERE email = %s
    """

    with get_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute(query, (email.lower(),))
            return cursor.fetchone()


def create_user(nome: str, email: str, password_hash: str, perfil_nome: str):
    query = """
        INSERT INTO users (
            nome,
            email,
            password_hash,
            ativo,
            criado_em,
            atualizado_em,
            perfil_id
        )
        SELECT %s, %s, %s, TRUE, CURRENT_DATE, CURRENT_DATE, id
        FROM users_perfil
        WHERE nome = %s
        RETURNING id, nome, email
    """

    with get_connection() as connection:
        with connection.cursor() as cursor:
            cursor.execute(
                query,
                (nome.strip(), email.lower(), password_hash, perfil_nome),
            )
            user = cursor.fetchone()
            connection.commit()
            return user
