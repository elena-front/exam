import { Outlet, NavLink, Link } from "react-router";
import { CLIENT_ROUTES } from "../../shared/consts/clientRoutes";
import "./Layout.css";
import UserApi from "../../entities/user/UserApi";

export default function Layout({ user, setUser }) {
  const handleSignOut = async () => {
    await UserApi.signOut();
    setUser(null);
  };

  return (
    <>
      <header>
        <div className="container header__inner">
          <Link to="/">
            <span>🌈Миссия: Выполнить</span>
          </Link>

          <nav>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              ✨ Главная
            </NavLink>

            <NavLink
              to="/add"
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              + Добавить задачу ❤️
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              🍭 ︎Мои задачи
            </NavLink>
          </nav>

          <div>
            {!user && (
              <Link to={CLIENT_ROUTES.AUTH} className="btn btn--ghost">
                ⎆ Войти
              </Link>
            )}

            {user && (
              <div>
                Привет, {user.username}
                <button onClick={handleSignOut} className="btn btn--ghost">
                  Выйти
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}
