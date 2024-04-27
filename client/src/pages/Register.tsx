import React, { useState} from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import DefaultInput from "../components/forms/DefaultInput";
import DefaultButton from "../components/buttons/DefaultButton";

// Api 
import { createAccount } from "../api/users";

// Utils
import { validateEmail } from "../utils/textHelpers";

const Register = () => {

  const navigate = useNavigate();
  
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isCreatingStep, setIsCreatingStep] = useState("");
  const [formError, setFormError] = useState("");
  const [formValidation, setFormValidation] = useState({
    email: false,
    username: false,
    password: false,
    passwordConfirmation: false,
    firstName: false,
    lastName: false,
  });
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  
  const preferedTheme = useSelector((state) => state.user.preferedTheme);

  const wrapperClasses = classNames('h-screen', 'flex', 'flex-col', 'transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });

  const initAccountCreation = async () => {
    setIsCreatingAccount(true);
    setIsCreatingStep("Creating account");
    
    createAccount(user.email, user.username, user.password, user.firstName, user.lastName)
      .then((response) => {
        if (response.error) {
          throw new Error(response.error);
        }
        setIsCreatingStep("Account created");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.error)
        if (error.response.data.error) {
          setFormError(error.response.data.error);
        } else {
          setFormError(error.message);
        }
      })
      .finally(() => {
        setIsCreatingAccount(false);
      });
  };
  
  const updateValue = (key, value) => {
    switch (key) {
      case "email":
        validateEmail(value) ? setFormValidation({...formValidation, [key]: true}) : setFormValidation({...formValidation, [key]: false});
        break;
      case "password":
        value.length > 6 && value.length <= 32 ? setFormValidation({...formValidation, [key]: true}) : setFormValidation({...formValidation, [key]: false});
        break;
      default:
        value.length > 4 && value.length <= 32 ? setFormValidation({...formValidation, [key]: true}) : setFormValidation({...formValidation, [key]: false});

    }
    setUser({...user, [key]: value});
  }
  
  const updatePasswordConfirmation = (value) => {
    value === user.password ? setFormValidation({...formValidation, passwordConfirmation: true}) : setFormValidation({...formValidation, passwordConfirmation: false});
    setPasswordConfirmation(value);
  }
  
  return (
    <div className={wrapperClasses}>
      <Navbar />
      <div className="flex flex-col items-center flex-grow w-full mt-36">
        <h1 className="mb-10 text-4xl font-bold text-teleMagenta">Create account</h1>
        {
          isCreatingAccount ? (
            <div>{isCreatingStep}</div>
          ) : (
            <div className="flex flex-col w-3/4 gap-4 sm:w-3/5 md:w-2/4 lg:w-2/6 xl:w-1/6">
          {
            formError
            ? <div className="py-1 text-center bg-red-200 rounded-full">{formError}</div>
            : null
          }
          <DefaultInput placeholder={"Username"} isValid={formValidation.username} requiresValidation={true} name="username" value={user.username} onChange={(e) => updateValue(e.target.name, e.target.value)} />
          <DefaultInput placeholder={"Email"} isValid={formValidation.email} requiresValidation={true} name="email" value={user.email} onChange={(e) => updateValue(e.target.name, e.target.value)} />
          <DefaultInput placeholder={"Password"} isValid={formValidation.password} requiresValidation={true} type={"password"} name="password" value={user.password} onChange={(e) => updateValue(e.target.name, e.target.value)} />
          <DefaultInput placeholder={"Password confirmation"} isValid={formValidation.passwordConfirmation} requiresValidation={true} type={"password"} name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => updatePasswordConfirmation(e.target.value)} />
          <DefaultInput placeholder={"First name"} isValid={formValidation.firstName} requiresValidation={true} name="firstName" value={user.firstName} onChange={(e) => updateValue(e.target.name, e.target.value)} />
          <DefaultInput placeholder={"Last name"} isValid={formValidation.lastName} requiresValidation={true} name="lastName" value={user.lastName} onChange={(e) => updateValue(e.target.name, e.target.value)} />
          <DefaultButton text="Connection" onClick={initAccountCreation} />
        </div>
          )
        }
        <div className="flex flex-col items-center gap-2 pt-4">
          <Link to="/login" className="text-teleMagenta">I already have an account</Link>
          <Link to="/recover" className="text-teleMagenta">I forgot my password</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;