import { useRef } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const userName = useRef("");
  const password = useRef("");
  const { user, setUser } = useContext(UserContext);
  function displayValues(userName, setUser) {
    setUser(userName.current);
    console.log(user);
  }

  function userData(event) {
    userName.current = event.target.value;
  }

  function passwordData(event) {
    password.current = event.target.value;
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="username" onChange={userData} />
      <input type="password" placeholder="password" onChange={passwordData} />
      <button
        className="btn btn-success"
        onClick={() => displayValues(userName, setUser)}
      >
        submit
      </button>
    </div>
  );
};

export default Login;
