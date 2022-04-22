import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import Routes from "./Routes"

const App = () => {
  const routes = useRoutes(Routes)
  return (
    <div className="App">
      <Suspense fallback={() => <div>Loading...</div>}>{routes}</Suspense>
    </div>
  )
}

export default App
