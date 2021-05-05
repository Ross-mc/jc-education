import {useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import icons from "../../icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./navigation.module.css"


const MobileNav = ({items}) => {
  const [isDropdown, setIsDropdown] = useState(false)

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  const bodyDropdownToggler = (e) => {
    if (isDropdown){
      setIsDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", bodyDropdownToggler);

    return () => {
      document.removeEventListener("click", bodyDropdownToggler)
    }
  })
  
  return (
    <>
      <div className={classes.icon} onClick={toggleDropdown} id="icon">
      <p style={{visibility: "hidden"}}>hello</p>
        <FontAwesomeIcon icon={isDropdown ? icons.close : icons.bars}  />
      </div>
      {isDropdown && <Dropdown items={items}/>}
    </>
  )
}

export default MobileNav