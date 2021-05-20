import Link from "next/link";
import classes from "./hero.module.css";

const Hero = ({ brandName, image }) => {
  if (brandName) {
    return (
      <Link href={`/brands/${brandName.toLowerCase()}`}>
        <div className={classes.hero}>
          <img src={image} alt={`${brandName} Hero`} />
          <p className={classes.centered}>{brandName}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={classes.heroNoLink}>
        <img src={image} alt={`${brandName} Hero`} />
      </div>
    );
  }
};

export default Hero;
