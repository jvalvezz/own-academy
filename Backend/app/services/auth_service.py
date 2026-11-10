from app.repositories import user_repository
from app.utils.security import (
    create_acess_token,
    hash_password,
    verify_password,
)


class EmailAlreadyExistsError(Exception):
    pass


class InvalidCredentialsError(Exception):
    pass


class DefaultProfileNotFoundError(Exception):
    pass


DEFAULT_PROFILE = "produtor"


def register(nome: str, email: str, password: str):
    existing_user = user_repository.find_by_email(email)


    if existing_user:
        raise EmailAlreadyExistsError("Email já cadastrado.")


    password_hash = hash_password(password)


    user = user_repository.create_user(
        nome=nome,
        email=email,
        password_hash=password_hash,
        perfil_nome=DEFAULT_PROFILE,
    )

    if not user:
        raise DefaultProfileNotFoundError("Perfil padrão de produtor não encontrado.")

    return user


def login(email: str, password: str) -> str:
    user = user_repository.find_by_email(email)


    if not user or not user["ativo"]:
        raise InvalidCredentialsError("Email ou senha inválidos")


    if not verify_password(password, user["password_hash"]):
        raise InvalidCredentialsError("Email ou senha inválidos.")


    return create_acess_token(user["id"])
