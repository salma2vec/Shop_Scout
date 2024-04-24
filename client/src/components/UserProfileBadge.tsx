import React from "react";
import { useSelector } from "react-redux";

// Components
import ProfileIcon from "../assets/icons/ProfileIcon";

const UserProfileBadge = () => {

  const username = useSelector((state) => state.user.username);
  
  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer bg-vividCerulean hover:bg-vividCeruleanDark">
      <ProfileIcon />
      <p className="text-lightWhite">{username}</p>
    </div>
  );
};

export default UserProfileBadge;