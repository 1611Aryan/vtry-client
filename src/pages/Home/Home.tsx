import styles from "./Home.module.scss"

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.yellowCircle}></div>
      <header>
        <h1>Vfit</h1>
        <nav>
          <button>Sign Up</button>
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
        <button>Login</button>
      </main>
    </section>
  )
}

export default Home
