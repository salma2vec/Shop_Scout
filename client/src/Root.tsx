import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

// Stores
import { setPreferedTheme } from './stores/userStore';

// Components
import Landing from './pages/Landing';
import NotFound from './pages/404';
import BannerEnv from './components/BannerEnv';

// Utils
import themeHelper from './utils/themeHelper';

const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let theme = localStorage.getItem('theme');
  
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;