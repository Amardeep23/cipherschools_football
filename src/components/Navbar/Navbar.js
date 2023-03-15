import React, { useState } from 'react';
import "./Navbar.scss";
import logo_main from "../../assets/img/logo_main.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profile_photo from "../../assets/img/profile_photo.jpg";
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //function to detect scrolling to change navbar color
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.scroll = null);
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
        <SportsSoccerOutlinedIcon className='logo_main'></SportsSoccerOutlinedIcon>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon"></SearchIcon>
          <span>Children</span>
          <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
          <img
            src={profile_photo}
            alt="profile_photo"
            className="profile_photo"
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon arrowDropDown"></ArrowDropDownIcon>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
