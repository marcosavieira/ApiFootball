import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn/index";
import { Home } from "./Pages/Home/index";

/* const ProtectedRoutes = ({ redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    isAuthenticated ? (
      
    ) : <Navigate to={redirectTo} />
  )
} */

export function MainRoutes() {
 return (
  <Routes>
   <Route path="/" element={<Navigate to="/sign-in" />} />
   <Route path="/sign-in" element={<SignIn />} />
   <Route path="/home" element={<Home />} />
  </Routes>
 );
}
