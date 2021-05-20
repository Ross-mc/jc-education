import Brand from "../../components/Brand";
import data from "../../utils/data";

const BrandPage = (props) => {
  return <Brand brand={props.brand}/>
};

export default BrandPage;

export async function getStaticProps(context){

  const brandname = context.params.brandname;
  const brand = data.brands[brandname];
  if (!brand){
    return {
      props: {
        brand: null
      }
    }
  }
  return {
    props: {
      brand
    }
  };
}

export async function getStaticPaths(){
  const paths = [];
  for (const brand in data.brands){
    paths.push({params: {brandname: brand}})
  }

  return {
    paths,
    fallback: false
  }

} 
