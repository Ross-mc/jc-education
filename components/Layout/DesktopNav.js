import Link from "next/link"

const DesktopNav = ({items}) => {
  return (
    <>
    {items.map(item => {
      return (
        <li key={item.href}>
          <div>
            <Link href={item.href}>{item.text}</Link>
          </div>
        </li>
      )
    })}
    </>
  )
}

export default DesktopNav