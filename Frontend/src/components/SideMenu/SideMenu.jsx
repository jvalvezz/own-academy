import './SideMenu.css'
import { useNavigate } from 'react-router-dom'
import { removeAccessToken } from '../../services/auth'

function SideMenu() {
    const navigate = useNavigate()

    function handleLogout() {
        removeAccessToken()
        navigate('/login', { replace: true })
    }

    return (
        <aside>
            <div className="side-menu__logo">
                <img src="/images/logo.png" alt="Logotipo OwnAcademy" />
            </div>

            <nav className="side-menu__list">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>

                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>

                    <li>
                        <a href="/cursos">Meus cursos</a>
                    </li>

                    <li>
                        <a href="/alunos">Alunos</a>
                    </li>

                    <li>
                        <a href="/trilhas">Trilhas e Eventos</a>
                    </li>

                    <li>
                        <a href="/configuracoes">Configurações</a>
                    </li>
                </ul>

                <div className='side-menu__footer'>
                    <a href="/perfil">Meu perfil</a>
                    <button type="button" onClick={handleLogout} >Sair</button>
                </div>
            </nav>
        </aside>
    )
}

export default SideMenu