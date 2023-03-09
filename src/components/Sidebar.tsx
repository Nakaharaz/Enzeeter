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
        <NavLink to="#">
          <Hash />
          <span>Explore</span>
        </NavLink>
        <NavLink to="#">
          <Bell />
          <span>Notification</span>
        </NavLink>
        <NavLink to="#">
          <Envelope />
          <span>Massages</span>
        </NavLink>
        <NavLink to="#">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="#">
          <FileText />
          <span>Lists</span>
        </NavLink>
        <NavLink to="#">
          <User />
          <span>Profile</span>
        </NavLink>
        <NavLink to="#">
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
