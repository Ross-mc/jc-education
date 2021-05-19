import Link from "next/link";
import classes from "./navigation.module.css";
import Tooltip from "./Tooltip";

const DesktopNav = ({ items, brandLinks }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.text}>
            <div className={classes.link}>
              {item.href ? (
                <Link href={item.href}>{item.text}</Link>
              ) : (
                <>
                <p>{item.text}</p>
                <Tooltip brandLinks={brandLinks}/>
                </>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default DesktopNav;
