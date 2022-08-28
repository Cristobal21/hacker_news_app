import { NavBar } from "./ui/NavBar"
import { AppRouter } from "./router/AppRouter"
import { getDataReact } from "./helpers/getDataReact"
import './styles.css'

export const ReignApp = () => {

  getDataReact()

  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  )
}
