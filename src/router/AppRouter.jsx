import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar/pages"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { login } from "../store"
import { auth } from "../firebase/config"

export const AppRouter = () => {

  const { authenticated } = useSelector(state=> state.auth)
  const dispatch = useDispatch()

  useEffect(()=> {
    // Set up an observer for changes to the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        // User is signed in
        dispatch( login( user ) )
      }else{
        // User is signed out
        dispatch( logout() )
      }
    })
    // Clean up the listener when the component is unmounted
    return () => unsubscribe()
  }, [])

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
