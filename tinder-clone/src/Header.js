import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

export default function Header() {
  return <div className="header">
     
      <IconButton>
      <PersonIcon font-size="large" className=" header__icon" />
      </IconButton>

<img className="header__logo" 
src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-500x281.png" 
alt="logo" />
<IconButton>
<ForumIcon font-size="large" className="header__icon" />
    </IconButton></div>;
}