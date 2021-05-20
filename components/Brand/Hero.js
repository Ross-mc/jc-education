import Link from "next/link";
import classes from "./hero.module.css"

const Hero = ({brandName, image}) => {
  return (
    <Link href={`/brands/${brandName.toLowerCase()}`}>
    <div className={classes.hero}>
      <img src={image} alt={`${brandName} Hero`}/>
    </div>
  </Link>
  )
}

export default Hero