import Link from "next/link"
import Image from "next/image";

import logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>    
      <Link className={classes.logo} href="/">
          <Image src={logo} alt="A plate with food." priority/>
          Mealitant
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader