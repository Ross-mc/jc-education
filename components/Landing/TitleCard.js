import classes from "./landing.module.css"

const TitleCard = ({titleCard}) => {
  return (
    <div className={classes.titleCard}>
      <div>
        <h2>{titleCard.name}</h2>
      </div>
      <div>
        <img src={titleCard.image} alt="Jacki Clarke"/>
      </div>
      <div>
        <h4>{titleCard.role}</h4>
      </div>
      <ul>
        {titleCard.links.map(link => {
          return (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">{link.company}</a>
            </li>
          )
        })}
      </ul>
      <div>
        <p>{titleCard.tagline}</p>
      </div>
    </div>
  )
}

export default TitleCard


// const titleCard = {
//   name: "Jacki Clarke",
//   role: "CND Education Ambassador",
//   image: "/images/jacki-clarke.jpg",
//   links: [
//     {
//       company: "Sweet Squared",
//       href: "https://www.sweetsquared.com/"
//     },
//     {
//       company: "Creative Academy Manchester",
//       href: "https://www.creativeacademymanchester.co.uk/"
//     }
//   ],
//   tagline: "Specialist in Beauty Education for brands including CND, Lecentè, Alterego, Light Elegance, Sachajuan, Kevin Murphy, Lashus and more"
// }