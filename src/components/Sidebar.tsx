import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";

import twitterLogo from "../assets/logo-twitter.svg";

import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/a-criar">
          <Hash />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/a-criar">
          <Bell />
          <span>Notification</span>
        </NavLink>
        <NavLink to="/a-criar">
          <Envelope />
          <span>Massages</span>
        </NavLink>
        <NavLink to="/a-criar">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/a-criar">
          <FileText />
          <span>Lists</span>
        </NavLink>
        <NavLink to="/a-criar">
          <User />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/a-criar">
          <DotsThreeCircle />
          <span>More</span>
        </NavLink>
      </nav>

      <button className="new-tweet">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
