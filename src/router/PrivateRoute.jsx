import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = ({authenticated}) => {
  return authenticated? <Outlet/> : <Navigate to="/auth/login" />
}