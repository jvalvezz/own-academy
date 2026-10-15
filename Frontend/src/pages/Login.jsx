import LoginForm from '../components/LoginForm/LoginForm'
import './Login.css'

function Login() {
    return (
        <main className="login">
            <section className="login__intro">
                <h1>Bem Vindo(a)</h1>

                <img src="/images/login-image.png" alt="Login Banner" />

                <h2>
                É aqui que você se torna referência pelo seu conhecimento
                </h2>

            </section>

            <section className="login__content">
                <LoginForm />
            </section>

        </main>
    )
}

export default Login
