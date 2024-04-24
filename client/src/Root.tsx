import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { jwtDecode as jwt } from 'jwt-decode';

// Stores
import { setPreferedTheme, logUserIn, logUserOut } from './stores/userStore';

// Components
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/404';
import BannerEnv from './components/BannerEnv';

// Utils
import themeHelper from './utils/themeHelper';
import { identifyUserByToken } from './api/users';

const Root = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    let theme = localStorage.getItem('theme');
    let accessToken = localStorage.getItem('access');
    let refreshToken = localStorage.getItem('refresh');

    if (!accessToken && !refreshToken) {
      // TODO: just make sure the global state is updated
      dispatch(logUserOut());
    } else {
      let decoded = jwt(accessToken);
      
      identifyUserByToken(accessToken)
      .then((response) => {
        dispatch(logUserIn({username: response.username}));
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(decoded)
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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;