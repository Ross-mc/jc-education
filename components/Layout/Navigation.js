import Link from "next/link";
import Logo from "./Logo";
import classes from "./navigation.module.css"

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <div>
              <Link href="/bookings">Bookings</Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/blog">Blog</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
