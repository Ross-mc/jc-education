import { useState } from "react";
import classes from "./dropdown.module.css";
import DropdownLink from "./DropdownLink";
const Dropdown = ({ items, brandLinks }) => {
  const [displayBrands, setDisplayBrands] = useState(false);

  const toggleBrands = () => {
    setDisplayBrands(!displayBrands);
  };

  return (
    <div className={classes.dropdown}>
      {items.map((item) => {
        return (
          <div key={item.text} className={classes.link}>
            <div className="dropdown-link">
              {item.href ? (
                <DropdownLink href={item.href} text={item.text} />
              ) : (
                <div onClick={toggleBrands}>
                  <p id="brands">{item.text}</p>
                  {displayBrands && (
                    <div className={classes.brands}>
                      {brandLinks.map((brand) => {
                        return (
                          <DropdownLink href={brand.href} text={brand.text} />
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
