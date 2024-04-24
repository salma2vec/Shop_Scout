import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router";

// Components
import LogoImg from "../../assets/logo-no-background.png";

/*
 * LogoAnimation Component
 * This component is used to animate the logo on the Navbar.
 * 
 * @returns {JSX.Element} - LogoAnimation Component
 */
const LogoAnimation = () => {
  const navigate = useNavigate();
  
  const [playAnimation, setPlayAnimation] = useState(false);
  
  const [animation, setAnimation] = useSpring(() => ({ 
    from: { transform: "rotate(0deg) scale(0.2)" },
    to: [
      { transform: "rotate(360deg) scale(1)" },
    ],
    config: { mass: 1, tension: 120, friction: 20 },
    loop: false,
    reset: false,
    onRest: () => { setPlayAnimation(false) }
  }));
  
  useEffect(() => {
    if (playAnimation) {
        setTimeout(() => {
          setAnimation({
            reset: true,
            loop: true,
            delay: 5000
          });
      });
    }
    
  }, [playAnimation, setAnimation]);
  
  return (
    <div className="w-20">
      <button className="cursor-pointer" onClick={() => navigate("/")}>
        <animated.img style={animation} src={LogoImg} alt="logo" />
      </button>
    </div>
  );
};

export default LogoAnimation;