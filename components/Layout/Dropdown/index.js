import Link from "next/link";
import classes from "./dropdown.module.css"
const Dropdown = ({items}) => {
  return (
    <div className={classes.dropdown}>
    {items.map(item => {
      return (
        <li key={item.href} className={classes.link}>
          <div>
            <Link href={item.href} >{item.text}</Link>
          </div>
        </li>
      )
    })}
    </div>
  )
}

export default Dropdown