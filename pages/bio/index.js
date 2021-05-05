import BioMain from "../../components/Bio/BioMain";
import data from "../../utils/data"

const Bio = (props) => {
  return (
    <>
      <BioMain bio={props.bio}/>
    </>
  )
}

export default Bio

export function getStaticProps(){

  return {
    props: {
      bio: data.bio
    }
  }
}