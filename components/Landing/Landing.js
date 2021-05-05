import classes from "./landing.module.css";
import TitleCard from "./TitleCard";

const Landing = ({ titleCard }) => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item">
          <TitleCard titleCard={titleCard}/>
        </div>
      </div>
    </>
  );
};

export default Landing;
