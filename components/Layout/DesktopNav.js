import Link from "next/link";
import { useState } from "react";
import classes from "./navigation.module.css";
import Tooltip from "./Tooltip";

const DesktopNav = ({ items, brandLinks }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const toggleTooltip = () => {
    setDisplayTooltip(!displayTooltip)
  }


  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.text}>
            <div className={classes.link}>
              {item.href ? (
                <Link href={item.href}>{item.text}</Link>
              ) : (
                <div onClick={toggleTooltip}>
                <p style={{cursor: "pointer"}}>{item.text}</p>
                {displayTooltip && <Tooltip brandLinks={brandLinks} toggleTooltip={toggleTooltip}/>}
                
                </div>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default DesktopNav;
