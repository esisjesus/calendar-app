import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar/pages"
import { useSelector } from "react-redux"

export const AppRouter = () => {

  const { authenticated } = useSelector(state=> state.auth)


  return (
    <Routes>
        {!authenticated?
            <Route path="/auth/*" element={<LoginPage/>}/>
            :
            <Route path="/*" element={<CalendarPage/>}/>
        }
        <Route path="/*" element={<Navigate to="auth/login"/>}/>
    </Routes>
  )
}
