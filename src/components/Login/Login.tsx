import React from "react"
import styles from "./Login.module.scss"

const Login: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const closeModal = () => setLoginVis(false)

  const ignoreClick = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <section className={styles.login} onClick={closeModal}>
      <form onClick={ignoreClick}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <br />
          <input name="email" type="email" autoFocus required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" required />
        </div>
        <button>Login!</button>
      </form>
    </section>
  )
}

export default Login
