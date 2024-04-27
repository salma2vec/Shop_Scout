import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecode as jwt } from 'jwt-decode';

// Stores
import { setPreferedTheme, setUserInformation, logUserIn, logUserOut } from './stores/userStore';
import { setIsLoading } from './stores/coreStore';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import BannerEnv from './components/BannerEnv';
import Loading from './components/Loading';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/404';

// Utils
import themeHelper from './utils/themeHelper';
import { identifyUserByToken } from './api/users';

const Root = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.core.isLoading);
  
  useEffect(() => {
    dispatch(setIsLoading(true));

    let theme = localStorage.getItem('theme');
    let accessToken = localStorage.getItem('access');
    let refreshToken = localStorage.getItem('refresh');

    if (!accessToken && !refreshToken) {
      // TODO: just make sure the global state is updated
      dispatch(logUserOut());
      dispatch(setIsLoading(false));

    } else {
      // let decoded = jwt(accessToken);
      
      identifyUserByToken(accessToken)
      .then((response) => {
        dispatch(logUserIn({username: response.username}));
        dispatch(setUserInformation(response));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
    }
    if (theme) {
      dispatch(setPreferedTheme(theme));
    } else {
      dispatch(setPreferedTheme(themeHelper.getUserPreferedSchema()));
    }
    
    
  }, [dispatch]);

  return (
    <>
      {
          process.env.NODE_ENV !== 'production' && <BannerEnv />
      }
      {
        isLoading ? 
        (
          <Loading />
        )
        : 
        (
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
        )
      }
    </>
  );
};

export default Root;