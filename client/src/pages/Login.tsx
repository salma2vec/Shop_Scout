import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

// Components
import Navbar from "../components/Navbar";
import DefaultButton from "../components/Button/DefaultButton";
import DefaultInput from "../components/Forms/DefaultInput";

// Api
import { authenticate } from '../api/users';

// Store
import { logUserIn } from '../stores/userStore';

/*
 * Login page
 * 
 * @returns {JSX.Element} JSX.Element
 */
const Login = () => {
  const dispatch = useDispatch();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(""); 
  const preferedTheme = useSelector((state) => state.user.preferedTheme);
  
  const wrapperClasses = classNames('h-screen', 'flex', 'flex-col', 'transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });

  const updateUsername = (value) => {
    setUsername(value);
  }
  
  const updatePassword = (value) => {
    setPassword(value);
  }
  
  const authenticateUser = async () => {
    try {
      const response = await authenticate(username, password);
      console.log(response);
      if (response.error) {
        throw new Error(response.error);
      }

      dispatch(logUserIn({username}));
      localStorage.setItem('access', response.accessToken);
      localStorage.setItem('refresh', response.refreshToken);
    } catch (error) {
      setFormError(error.message);
    }
  }
  
  return (
    <div className={wrapperClasses}>
      <Navbar />
      <div className="flex flex-col items-center flex-grow w-full mt-36">
        <h1 className="mb-10 text-4xl font-bold text-teleMagenta">Login</h1>
        <div className="flex flex-col w-1/4 gap-4">
          {
            formError
            ? <div className="py-1 text-center bg-red-200 rounded-full">{formError}</div>
            : null
          }
          <DefaultInput placeholder={"Username"} name="username" value={username} onChange={(e) => updateUsername(e.target.value)} />
          <DefaultInput placeholder={"Password"} name="password" value={password} onChange={(e) => updatePassword(e.target.value)} />
          <DefaultButton text="Connection" onClick={authenticateUser} />
        </div>
      </div>
    </div>
  );
};

export default Login;