import Link from "next/link";
import classes from "./dropdown.module.css";
const Dropdown = ({ items, brandLinks }) => {
  return (
    <div className={classes.dropdown}>
      {items.map((item) => {
        return (
          <div key={item.text} className={classes.link}>
            <div className="dropdown-link">
              {item.href ? (
                <Link href={item.href}>
                  <a>
                    <div style={{ height: "100%" }} className="dropdown-link">{item.text}</div>
                  </a>
                </Link>
              ) : (
                <p id="brands">{item.text}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
