import Link from "next/link";
import classes from "./navigation.module.css"

const DesktopNav = ({items}) => {
  return (
    <>
    {items.map(item => {
      return (
        <li key={item.href}>
          <div className={classes.link}>
            <Link href={item.href}>{item.text}</Link>
          </div>
        </li>
      )
    })}
    </>
  )
}

export default DesktopNav