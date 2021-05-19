import Link from "next/link";
import {isDesktop} from "react-device-detect"
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import classes from "./navigation.module.css"
import data from "../../utils/data";

const Navigation = () => {
  const navigationLinks = [
    {
      href: "/",
      text: "Home"
    },
    {
      href: "/bio",
      text: "About"
    },
    {
      text: "Brands"
    },
    {
      href: "/blog",
      text: "Blog"
    }
  ];

  const brandLinks = Object.keys(data.brands).map(key => {
    const brandName = data.brands[key].name;
    return {
      href: `/brands/${brandName.toLowerCase()}`,
      text: brandName
    }
  });
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          {isDesktop ? <DesktopNav items={navigationLinks} brandLinks={brandLinks}/> : <MobileNav items={navigationLinks} brandLinks={brandLinks}/>}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
