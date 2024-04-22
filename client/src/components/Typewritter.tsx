import React, { useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import dangerouslySetInnerHTML from 'react-dangerously-set-html';

const Typewriter = ({ text, delay }) => {
  const preferedTheme = useSelector((state) => state.user.preferedTheme);

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTag, setIsTag] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => {
          const nextChar = text[currentIndex];
          if (nextChar === '<') {
            setIsTag(true);
          } else if (nextChar === '>') {
            setIsTag(false);
          }

          // Append the character to the current text if it's not a tag
          if (!isTag) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            return prevText + nextChar;
          }
          return prevText;
        });
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isTag]);

  return (
    <h1
      className={classNames('max-w-2xl text-4xl font-bold leading-none md:text-5xl drop-shadow', {
        'text-lighterWhite': preferedTheme === 'dark',
        'text-darkerBlack': preferedTheme === 'light',
      })}
    >
      <div dangerouslySetInnerHTML={{__html: currentText}}></div>

    </h1>
  )
};

export default Typewriter;