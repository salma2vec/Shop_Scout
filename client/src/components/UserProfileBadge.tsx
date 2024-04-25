import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import ProfileIcon from "../assets/icons/ProfileIcon";

// Stores
import { logUserOut } from "../stores/userStore";

const UserProfileBadge = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const username = useSelector((state) => state.user.username);
  
  const [showMenu, setShowMenu] = useState(false);

  return(
    <div className="relative" >
      <div className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer bg-vividCerulean hover:bg-vividCeruleanDark" onClick={() => setShowMenu(!showMenu)}>
        <ProfileIcon />
        <p className="text-lightWhite">{user.firstName}</p>
        
      </div>
      {
          showMenu && (
            <div className="absolute right-0 px-2 py-1 rounded bg-vividCerulean top-12">
              <div className="p-1 rounded cursor-pointer text-lightWhite hover:bg-vividCeruleanDark">Profile</div>
              <div className="p-1 rounded cursor-pointer text-lightWhite hover:bg-vividCeruleanDark">History</div>
              <div className="p-1 rounded cursor-pointer text-lightWhite hover:bg-vividCeruleanDark">Preferences</div>
              <div className="p-1 rounded cursor-pointer text-lightWhite hover:bg-vividCeruleanDark" onClick={() => dispatch(logUserOut())}>Logout</div>
            </div>
          )
        }
    </div>
  )
};

export default UserProfileBadge;