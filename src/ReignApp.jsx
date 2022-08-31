import { NavBar } from "./ui/NavBar"
import { AppRouter } from "./router/AppRouter"
import { getDataReact } from "./helpers/getDataReact"
import './styles.css'
import { useFetchDataReact } from "./hooks/useFetchDataReact"

export const ReignApp = () => {

  useFetchDataReact()
  // getDataReact()

  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  )
}
