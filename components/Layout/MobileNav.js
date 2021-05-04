import {useState} from "react";
import Dropdown from "./Dropdown";
import icons from "../../icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./navigation.module.css"


const MobileNav = ({items}) => {
  const [isDropdown, setIsDropdown] = useState(false)

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
  }
  
  return (
    <>
      <div className={classes.icon} onClick={toggleDropdown}>
      <p style={{visibility: "hidden"}}>hello</p>
        <FontAwesomeIcon icon={isDropdown ? icons.close : icons.bars}  />
      </div>
      {isDropdown && <Dropdown items={items}/>}
    </>
  )
}

export default MobileNav