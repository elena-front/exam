import { Routes, Route } from "react-router";
import  Layout  from "../Layout/Layout";

export default function AppRouter({ user, setUser }) {
  return (
    <Routes>
      <Route
        path={CLIENT_ROUTES.MAIN_PAGE}
        element={<Layout user={user} setUser={setUser} />}
      >
        <Route index element={<Home user={user} />} />


      </Route>
    </Routes>
  );
}
