import Landing from "../components/Landing/Landing"

const Home = (props) => {
  return (
    <>
      <Landing titleCard={props.titleCard}/>
      <Landing titleCard={props.titleCard}/>
    </>
  )
}

export default Home

export function getStaticProps(){

  const titleCard = {
    name: "Jacki Clarke",
    role: "CND Education Ambassador",
    image: "/images/jacki-clarke.jpg",
    links: [
      {
        company: "Sweet Squared",
        href: "https://www.sweetsquared.com/"
      },
      {
        company: "Creative Academy Manchester",
        href: "https://www.creativeacademymanchester.co.uk/"
      }
    ],
    tagline: "Specialist in Beauty Education for brands including CND, Lecentè, Alterego, Light Elegance, Sachajuan, Kevin Murphy, Lashus and more"
  }


  return {
    props: {
      titleCard
    }
  }
}