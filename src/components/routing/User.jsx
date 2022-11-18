//components
import Home from "../pages/user/Home";
import Profile from "../pages/user/Profile";
import Navbar from "../shared/Navbar";
import Error from "../pages/Error";
import PrivateRoute from "../PrivateRoute";
//router dom imports
import { Routes, Route } from "react-router-dom";

export default function User() {
  return (
    <>
      <Navbar role="user" />
      <Routes>
        <Route element={<PrivateRoute allowedRole="user" />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}
