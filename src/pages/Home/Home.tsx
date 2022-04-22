import { useState } from "react"
import { Link } from "react-router-dom"
import Login from "../../components/Login"
import styles from "./Home.module.scss"

const Home = () => {
  const [loginVis, setLoginVis] = useState(false)

  const openModal = () => setLoginVis(true)

  return (
    <section className={styles.home}>
      <div className={styles.yellowCircle}></div>
      <header>
        <h1>Vfit</h1>
        <nav>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </nav>
      </header>
      <main>
        <h1>
          <span>VIRTUAL</span>
          <br />
          <span>TRIAL</span>
          <br />
          <span>ROOM</span>
        </h1>
        <button onClick={openModal}>Login</button>
      </main>
      {loginVis && <Login setLoginVis={setLoginVis} />}
    </section>
  )
}

export default Home
