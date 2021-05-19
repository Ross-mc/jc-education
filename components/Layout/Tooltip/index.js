import Link from "next/link";
import classes from "./tooltip.module.css";

const Tooltip = ({brandLinks, toggleTooltip}) => {
  return (
    <div className={classes.container} onMouseLeave={toggleTooltip}>
      {brandLinks.map((brand) => {
        return (
          <div key={brand.href} className={classes.item}>
            <Link href={brand.href}>{brand.text}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Tooltip