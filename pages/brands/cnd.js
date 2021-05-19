import Brand from "../../components/Brand";
import data from "../../utils/data";

const CND = (props) => {
  return <Brand brand={props.brand}/>
};

export default CND;

export function getStaticProps() {
  return {
    props: {
      brand: data.brands.CND
    }
  };
}
