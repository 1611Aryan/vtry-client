import { Link } from "react-router-dom"
import texture from "./../../../public/media/texture.png"
import styles from "./Signup.module.scss"

const Signup = () => {
  return (
    <section className={styles.signup}>
      <div className={styles.yellowCircle}></div>
      <img className={styles.texture} src={texture} />
      <header>
        <h1>Vfit</h1>
        <nav>
          <Link to="/">
            <button>Login</button>
          </Link>
        </nav>
      </header>
      <main>
        <div className={styles.left}>
          <h1>
            <span>REGISTER</span>
            <br />
            <span>NOW</span>
          </h1>
        </div>
        <div className={styles.right}>
          <form>
            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" required name="name" id="name" autoFocus />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="phone">Phone No.</label>
                <br />
                <input type="text" required name="phone" id="phone" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" required name="email" id="email" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" required name="password" id="password" />
              </div>
            </div>
            <button>Register</button>
          </form>
        </div>
      </main>
    </section>
  )
}

export default Signup
