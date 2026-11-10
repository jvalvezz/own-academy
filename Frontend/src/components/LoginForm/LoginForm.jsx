import Input from '../Input/Input'
import Button from '../Button/Button'
import './LoginForm.css'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login, register } from '../../services/api'
import { saveAccessToken } from '../../services/auth'

function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isRegistering, setIsRegistering] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()
        setError('')

        if (isRegistering && password !== confirmPassword) {
            setError('As senhas não coincidem.')
            return
        }

        setIsSubmitting(true)

        try {
            if (isRegistering) {
                await register(name, email, password)
            }

            const data = await login(email, password)
            saveAccessToken(data.access_token, rememberMe)
            navigate('/home', { replace: true })
        } catch (requestError) {
            setError(requestError.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    function changeMode(registering) {
        setIsRegistering(registering)
        setError('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__tabs">
                <button
                    type="button"
                    className={!isRegistering ? 'login-form__tab--active' : ''}
                    onClick={() => changeMode(false)}
                >
                    Login
                </button>
                <button
                    type="button"
                    className={isRegistering ? 'login-form__tab--active' : ''}
                    onClick={() => changeMode(true)}
                >
                    Cadastrar-se
                </button>
            </div>

            <div className="login-form__logo">
                <img src="/images/logo.png" alt="Logotipo OwnAcademy" />
                <p>Own Academy - Sua academia particular</p>
            </div>

            <div className="login-form__fields">
                {isRegistering && (
                    <Input
                        label="Nome"
                        name="nome"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Seu nome"
                        disabled={isSubmitting}
                        required
                    />
                )}

                <Input
                    label="E-mail"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="seuemail@exemplo.com"
                    disabled={isSubmitting}
                    required
                />

                <Input 
                    label="Senha"
                    name="senha"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Senha de acesso"
                    disabled={isSubmitting}
                    required
                />

                {isRegistering && (
                    <Input
                        label="Confirmar senha"
                        name="confirmar-senha"
                        type="password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder="Repita sua senha"
                        disabled={isSubmitting}
                        required
                    />
                )}

                <FormControlLabel
                control={
                    <Checkbox
                    size="small"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    disabled={isSubmitting}
                    sx={{
                        color: 'var(--color-text-secondary)',
                        '&.Mui-checked': {
                        color: 'var(--color-primary)',
                        },
                    }}
                    />
                }
                label="Lembrar de mim"
                sx={{
                    color: 'var(--color-text-secondary)',
                    '& .MuiFormControlLabel-label': {
                        fontSize: '12px',
                    },
                }}
                />

                {error && (
                    <p className="login-form__error" role="alert">
                        {error}
                    </p>
                )}
            </div>

            <div className="login-form__action">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting
                        ? (isRegistering ? 'Criando conta...' : 'Entrando...')
                        : (isRegistering ? 'Criar conta de produtor' : 'Entrar')}
                </Button>
            </div>
        </form>

    )
}

export default LoginForm
