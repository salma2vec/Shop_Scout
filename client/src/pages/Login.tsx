import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import DefaultButton from "../components/buttons/DefaultButton";
import DefaultInput from "../components/forms/DefaultInput";

// Api
import { authenticate, identifyUserByToken } from '../api/users';
import { setIsLoading } from "../stores/coreStore";

// Store
import { logUserIn, setUserInformation } from '../stores/userStore';

/*
 * Login page
 * 
 * @returns {JSX.Element} JSX.Element
 */
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authenticationStep, setAuthenticationStep] = useState("");
  const [formError, setFormError] = useState(""); 
  
  const preferedTheme = useSelector((state) => state.user.preferedTheme);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const wrapperClasses = classNames('h-screen', 'flex', 'flex-col', 'transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });

  const updateUsername = (value) => {
    value.length > 4 && value.length <= 32 ? setIsUsernameValid(true) : setIsUsernameValid(false);
    setUsername(value);
  }
  
  const updatePassword = (value) => {
    value.length > 6 && value.length <= 32 ? setIsPasswordValid(true) : setIsPasswordValid(false);
    setPassword(value);
  }
  
  const authenticateUser = async () => {
    setAuthenticationStep("Verifying credentials");
    setIsAuthenticating(true);
    authenticate(username, password)
      .then((response) => {
        if (response.error) {
          throw new Error(response.error);
        }

        dispatch(logUserIn({username}));
        localStorage.setItem('access', response.accessToken);
        localStorage.setItem('refresh', response.refreshToken);
        
        setAuthenticationStep("Identifying user");
        identifyUserByToken(response.accessToken)
          .then((response) => {
            dispatch(setUserInformation(response));
            navigate('/dashboard');
          })
          .catch((error) => {
            setFormError(error);
          });
          
      })
      .catch((error) => {
        console.log(error)
        setFormError(error.message);
      })
      .finally(() => {
        setIsAuthenticating(false);
      });
  }
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <div className={wrapperClasses}>
      <Navbar />
      <div className="flex flex-col items-center flex-grow w-full mt-36">
        <h1 className="mb-10 text-4xl font-bold text-teleMagenta">Login</h1>
        {
          isAuthenticating ? (
            <div>{authenticationStep}</div>
          ) : (
            <div className="flex flex-col w-3/4 gap-4 sm:w-3/5 md:w-2/4 lg:w-2/6 xl:w-1/6">
          {
            formError
            ? <div className="py-1 font-semibold text-center rounded shadow text-lightWhite bg-orangePantone">{formError}</div>
            : null
          }
          <DefaultInput
            placeholder={"Username"} 
            isValid={isUsernameValid}
            requiresValidation={true}
            name="username" 
            value={username} 
            onChange={(e) => updateUsername(e.target.value)}
          />
          <DefaultInput
            placeholder={"Password"}
            isValid={isPasswordValid}
            requiresValidation={true}
            type={"password"}
            name="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
          <DefaultButton text="Login" onClick={authenticateUser} disabled={!isUsernameValid || !isPasswordValid} />
        </div>
          )
        }
        <div className="flex flex-col items-center gap-2 pt-4">
          <Link to="/register" className="text-teleMagenta">I don't have an account</Link>
          <Link to="/recover" className="text-teleMagenta">I forgot my password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;