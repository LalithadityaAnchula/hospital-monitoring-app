//components
import Navbar from "../shared/Navbar";
import AdminHome from "../pages/admin/AdminHome";
import Profile from "../pages/user/Profile";
import Error from "../pages/Error";
import PrivateRoute from "../PrivateRoute";
//router dom imports
import { Routes, Route } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <Navbar role="admin" />
      <Routes>
        <Route element={<PrivateRoute allowedRole="admin" />}>
          <Route path="/" element={<AdminHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
