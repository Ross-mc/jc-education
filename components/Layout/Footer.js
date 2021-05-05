import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import icons from "../../icons"
import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href="https://www.instagram.com/jackiclarke.cnd_s2ea/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icons.instagram} />
      </a>
    </footer>
  )
}

export default Footer