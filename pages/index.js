import Link from "next/link";
import Landing from "../components/Landing/Landing";
import data from "../utils/data";

const Home = (props) => {
  const { brands, titleCard, blurb } = props;
  const brandKeys = Object.keys(brands);

  return (
    <>
      <Landing titleCard={titleCard} blurb={blurb} />
      <h1 style={{fontSize: "2em"}}>Brands</h1>
      <div className="brandContainer">
        {brandKeys.map((key) => {
          const brandName = brands[key].name;
          return (
            <Link href={`/brands/${brandName.toLowerCase()}`} key={brandName}>
              <a className="brandLink">{brandName.toUpperCase()}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;

export function getStaticProps() {
  return {
    props: {
      titleCard: data.titleCard,
      blurb: data.blurb,
      brands: data.brands,
    },
  };
}
