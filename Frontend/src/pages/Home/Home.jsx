import Button from '../../components/Button/Button'
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <div className="home-page__header">
        <h1>Home</h1>

        <Button fullWidth={false}>
          Curso +
        </Button>
      </div>
    </main>
  )
}

export default Home
