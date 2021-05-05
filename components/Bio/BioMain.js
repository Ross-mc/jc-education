import Bio from "./Bio"
import classes from "./bio.module.css"

const BioMain = ({ bio }) => {
  return (
    <>
    <div className="flex-container">
      <div className="flex-item">
        <h1>Jacki Clarke ~ Educator</h1>
        <div>
          <img src="/images/jacki-clarke.jpg" alt="Jacki Clarke Profile"/>
        </div>
      </div>
      <Bio text={bio[0]}/>
      {/* <div className="flex-item">
        <a href="https://www.sweetsquared.com/" target="_blank" rel="noreffer" className={classes.link}>Sweet Squared</a>
      </div>
      <div className="flex-item">
      <a href="https://www.creativeacademymanchester.co.uk/" target="_blank" rel="noreffer" className={classes.link}>Creative Academy Manchester</a>
      </div> */}
    </div>
    <div className={classes.img}>
      <img src="/images/cnd-solar-oil.jpg" alt="CND Solar Oil"/>
    </div>
    <div className="flex-container">
        <Bio text={bio[1]}/>
    </div>
    <div className={classes.img}>
      <img src="/images/nails.jpg" alt="Nails"/>
    </div>
    <div className="flex-container">
        <Bio text={bio[2]}/>
    </div>
    </>
  )
}

export default BioMain
