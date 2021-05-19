import Link from "next/link"

const Tooltip = ({brandLinks}) => {
  console.log(brandLinks)
  return (
    <div>
      {brandLinks.map((brand) => {
        return (
          <div key={brand.href}>
            <Link href={brand.href}>{brand.text}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Tooltip