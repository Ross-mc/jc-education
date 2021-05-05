import BioMain from "../../components/Bio/BioMain"

const Bio = (props) => {
  return (
    <>
      <BioMain bio={props.bio}/>
    </>
  )
}

export default Bio

export function getStaticProps(){

  const bio = [
    "Jacki started in the beauty industry by completing Beauty Therapy Levels 2&3 at college aged 21 before working in a salon for 10 years where she was introduced to CND. Completing her Brisa Gel Beginners in 2015 created a passion for nails and a thirst for the knowledge starting a journey to achieving her CND Grand Master qualification in 2018. Jacki also loves the ever growing lash sector of the industry and now passes on her knowledge and skills as part of our LASHUS Education Team. Her desire for knowledge and love for the CND brand and products continues making her a great addition to the team.",
    "I have always had a passion for people and initially thought my place within the industry would be on a holistic treatment path. But after being sent to Creative Academy Manchester on a Brisa Gel Beginners course by my manager, I found a new love in the creation of stunning enhancements and a thirst for the knowledge. The encouragement and support I received throughout my training was overwhelming and inspiring .From there my love for CND grew and I continued on my journey to achieve my Brisa Gel Masters and then Grand Master status.",
    "I believe whole heartedly in the ethos of Sweet Squared of Love and Respect. I am incredibly proud to work with the brands that I love and trust - to guide others through their own journey, help ignite their passions and cheer-lead them in their own growth is a real blessing and privilege"
  ]



  return {
    props: {
      bio
    }
  }
}