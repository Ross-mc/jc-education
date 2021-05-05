import Link from "next/link";
import {isDesktop} from "react-device-detect"
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import classes from "./navigation.module.css"

const Navigation = () => {
  const navigationLinks = [
    {
      href: "/bio",
      text: "About"
    },
    {
      href: "/blog",
      text: "Blog"
    },
    {
      href: "/contact",
      text: "Contact"
    }
  ]

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          {isDesktop ? <DesktopNav items={navigationLinks}/> : <MobileNav items={navigationLinks}/>}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
