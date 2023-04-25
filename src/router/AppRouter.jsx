import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar/pages"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { login, logout, setEvents } from "../store"
import { auth } from "../firebase/config"
import { SplashScreen } from "../auth/components/SplashScreen"

export const AppRouter = () => {

  const { authenticated } = useSelector( state=> state.auth )
  const [isAuthenticating, setisAuthenticating] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=> {
    setisAuthenticating(true)
    // Set up an observer for changes to the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        // User is signed in
        dispatch( login( user ) )
      }else{
        // User is signed out
        dispatch( logout() )
        dispatch( setEvents([]) )
      }
      setisAuthenticating(false)
    })
    // Clean up the listener when the component is unmountedv
    return () => unsubscribe()
  }, [])
  
  if( isAuthenticating ){
    return(
      <>
        <SplashScreen/>
      </>
    )
  }

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
