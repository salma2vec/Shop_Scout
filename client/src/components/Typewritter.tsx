import React, { useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import dangerouslySetInnerHTML from 'react-dangerously-set-html';

const Typewriter = ({ text, delay }) => {
  const preferedTheme = useSelector((state) => state.user.preferedTheme);

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTag, setIsTag] = useState(true);

  useEffect(() => {
    // TODO: Implement better typing effect
    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(interval);
        return;
      }
      
      if (text[currentIndex] === '<') {
        setIsTag(true);
      } else if (text[currentIndex] === '>') {
        setIsTag(false);
      }

      setCurrentText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex, delay, text, isTag]);

  return (
    <h1
      className={classNames('max-w-2xl text-4xl font-bold leading-none md:text-5xl drop-shadow', {
        'text-lighterWhite': preferedTheme === 'dark',
        'text-darkerBlack': preferedTheme === 'light',
      })}
    >
      {/* <div dangerouslySetInnerHTML={{__html: currentText}}></div> */}
      <span className="whitespace-nowrap">Elevate Your <span className="text-teleMagenta">E-commerce</span></span> Intelligence with ShopScout
    </h1>
  )
};

export default Typewriter;