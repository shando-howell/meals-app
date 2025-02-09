import Link from "next/link"
import Image from "next/image";

import MainHeaderBackground from "./MainHeaderBackground";
import logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>    
        <Link className={classes.logo} href="/">
            <Image src={logo} alt="A plate with food." priority/>
            Mealitant
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader