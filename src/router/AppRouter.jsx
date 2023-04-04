import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar/pages"

export const AppRouter = () => {

  const auth = 'non-authenticated'

  return (
    <Routes>
        {auth === 'non-authenticated'?
            <Route path="/auth/*" element={<LoginPage/>}/>
            :
            <Route path="/*" element={<CalendarPage/>}/>
        }
        <Route path="/*" element={<Navigate to="auth/login"/>}/>
    </Routes>
  )
}
