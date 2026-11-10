const API_URL = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000'

export async function login(email, password) {
    let response

    try {
        response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
    } catch {
        throw new Error('Não foi possível conectar ao servidor. Verifique se o backend está ligado.')
    }

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
        throw new Error(data.detail || 'Não foi possível fazer login.')
    }

    return data
}

export async function register(nome, email, password) {
    let response

    try {
        response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, password }),
        })
    } catch {
        throw new Error('Não foi possível conectar ao servidor. Verifique se o backend está ligado.')
    }

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
        throw new Error(data.detail || 'Não foi possível criar sua conta.')
    }

    return data
}
