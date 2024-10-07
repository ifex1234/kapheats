"use client";
import "../styles/navBar.scss";
import React from "react";
import images from "../constant/images";
import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineDensityMedium as MenuRounded,
  MdMenuOpen as MenuOpen,
} from "react-icons/md";
export default function NavBar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link href="/">
          <Image src={images.gericht} alt="app__logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link href="/about">About</Link>
        </li>
        <li className="p__opensans">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="p__opensans">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In
        </a>
        <div />
        <Link href="/booking" className="p__opensans">
          Book Table
        </Link>
      </div>

      <div className="app__navbar-smallscreen">
        <MenuRounded color="#ac9513" onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MenuOpen
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link href="/home" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
