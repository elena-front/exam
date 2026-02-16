import { useState } from "react";
import { useNavigate } from "react-router";
import "./SignInForm.css";
import UserApi from "../../src/entities/user/UserApi";
import { setAccessToken } from "../../src/shared/lib/axiosInstance";
import { CLIENT_ROUTES } from "../../src/shared/consts/clientRoutes";

function SignInForm({ setUser }) {
  const initialValue = { email: "", password: "" };
  const [signInData, setSignInData] = useState(initialValue);
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setSignInData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const signInHandler = async (event) => {
    event.preventDefault();

    const { statusCode, data, error } = await UserApi.signIn(signInData);
    if (statusCode === 200) {
      setAccessToken(data.accessToken);
      setUser(data.user);
      navigate(CLIENT_ROUTES.MAIN_PAGE);
      setSignInData(initialValue);
    } else {
      alert(error || "Ошибка при входе в приложение");
    }
  };

  return (
    <>
      <div className="authWrapper">
        <button className="btn">📧 Email</button>
        <button disabled className="btn btn--disabled">
          📱 Телефон
        </button>
      </div>

      <form className="form" onSubmit={signInHandler}>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            name="email"
            type="email"
            required
            onChange={inputHandler}
            value={signInData.email}
            label="Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            placeholder="*****"
            name="password"
            type="password"
            required
            onChange={inputHandler}
            value={signInData.password}
            label="Пароль"
          />
        </div>
        <button className="btn btn--active m20" type="submit">
          Войти
        </button>
      </form>
    </>
  );
}

export default SignInForm;
