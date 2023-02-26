import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Analytics,
  Home,
  Products,
  Users,
  Edit,
  Unauthorized,
} from "./pages";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Layout from "./layout/Layout";
const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          {/* We want to Protect */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Route>

          <Route
            element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}
          >
            <Route path="/edit" element={<Edit />} />
          </Route>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;
