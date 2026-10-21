import Input from '../Input/Input'
import Button from '../Button/Button'
import './LoginForm.css'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        navigate('/home')
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__tabs">
                <button type="button">Login</button>
                <button type="button">Cadastrar-se</button>
            </div>

            <div className="login-form__logo">
                <img src="/images/logo.png" alt="Logotipo OwnAcademy" />
                <p>Own Academy - Sua academia particular</p>
            </div>

            <div className="login-form__fields">
                <Input
                    label="Login"
                    name="login"
                    placeholder="Login (email, cpf ou nome de usuário)"
                />

                <Input 
                    label="Senha"
                    name="senha"
                    placeholder="Senha de acesso"
                />

                <FormControlLabel
                control={
                    <Checkbox
                    size="small"
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
            </div>

            <div className="login-form__action">
                <Button type="submit">
                    Entrar
                </Button>
            </div>
        </form>

    )
}

export default LoginForm
