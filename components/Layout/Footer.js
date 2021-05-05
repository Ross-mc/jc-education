import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../icons";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.list}>
        <div className="listItem">
          <a
            href="https://www.instagram.com/jackiclarke.cnd_s2ea/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={icons.instagram} />
          </a>
        </div>
        <div className="listItem">
          <a
            href="https://www.facebook.com/jacki.bridge"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={icons.facebook} />
          </a>
        </div>
      </div>
      <div>
        <small>Ross McIntyre 2021</small>
      </div>
    </footer>
  );
};

export default Footer;
