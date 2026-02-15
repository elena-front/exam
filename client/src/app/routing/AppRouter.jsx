import { Routes, Route } from "react-router";

export default function AppRouter({ user, setUser }) {
  return (
    <Routes>
      <Route
        path={CLIENT_ROUTES.MAIN_PAGE}
        element={<Layout user={user} setUser={setUser} />}
      ></Route>
    </Routes>
  );
}
