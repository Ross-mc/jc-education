import Link from "next/link";
import classes from "./dropdown.module.css"
const Dropdown = ({items}) => {
  return (
    
    <div className={classes.dropdown}>
    {items.map(item => {
      return (
        <div key={item.href} className={classes.link}>
          <div>
            <Link href={item.href} >
              <a>
                <div style={{height: "100%"}}>
                  {item.text}
                </div>
              </a>
            </Link>
          </div>
        </div>
      )
    })}
    </div>
  )
}

export default Dropdown