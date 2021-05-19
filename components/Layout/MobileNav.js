import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import icons from "../../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./navigation.module.css";

const MobileNav = ({ items, brandLinks }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const bodyDropdownToggler = (e) => {
    console.log(e);
    if (
      (typeof e.target.className === "string" &&
        e.target.className.startsWith("dropdown-link")) ||
      e.target.id === "brands"
    ) {
      return;
    }
    if (isDropdown) {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", bodyDropdownToggler);

    return () => {
      document.removeEventListener("click", bodyDropdownToggler);
    };
  });

  return (
    <>
      <div className={classes.icon} onClick={toggleDropdown} id="icon">
        <p style={{ visibility: "hidden" }}>hello</p>
        <FontAwesomeIcon icon={isDropdown ? icons.close : icons.bars} />
      </div>
      {isDropdown && <Dropdown items={items} brandLinks={brandLinks} />}
    </>
  );
};

export default MobileNav;
