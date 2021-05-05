import classes from "./landing.module.css";
import TitleCard from "./TitleCard";

const Landing = ({ titleCard, blurb }) => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item">
          <TitleCard titleCard={titleCard}/>
        </div>
        <div className="flex-item">
          <p>{blurb}</p>
        </div>
        <div className="flex-item">
          <h1>COURSES</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
