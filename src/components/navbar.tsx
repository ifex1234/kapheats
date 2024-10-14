"use client";
import "../styles/navBar.scss";
import React from "react";
import Link from "next/link";
import {
  MdOutlineDensityMedium as MenuRounded,
  MdMenuOpen as MenuOpen,
} from "react-icons/md";
import { UserButton } from "@stackframe/stack";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link className={`text-white text-3xl `} href="/">
          Kapheats
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
        <li className="p__opensans">
          <Link href="/my-reservations">My Reservations</Link>
        </li>
      </ul>
      <UserButton />

      <div className="app__navbar-login md:hidden">
        <span className="p__opensans mt-3 md:hidden">
          <UserButton />
        </span>

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
              <li>
                <Link href="/booking" onClick={() => setToggleMenu(false)}>
                  Book Table
                </Link>
              </li>
              <li>
                <Link
                  href="/my-reservations"
                  onClick={() => setToggleMenu(false)}
                >
                  My Reservations
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
