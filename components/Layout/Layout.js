import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = ({children}) => {
  return (
    <div className="wrapper">
      <Navigation /> 
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout