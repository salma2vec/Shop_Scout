import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setPreferedTheme } from '../stores/userStore';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const preferedTheme = useSelector((state) => state.user.preferedTheme);

  const wrapperClasses = classNames('tdnn', 'cursor-pointer', {
    day: preferedTheme === 'light',
  });

  const containerClasses = classNames('moon', {
    'sun': preferedTheme === 'light',
  })
  const handleThemeChange = () => {
    dispatch(setPreferedTheme(preferedTheme === 'light' ? 'dark' : 'light')); // replace 'dark' with the new theme
  };

  return (
    <div className={wrapperClasses} onClick={handleThemeChange}>
      <div className={containerClasses}></div>
    </div>
  );
};

export default DarkModeToggle;