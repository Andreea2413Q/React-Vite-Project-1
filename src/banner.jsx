import { logo } from './banner.module.css'

const CssAtribute = {
  fontStyle:"italic",
  fontSize:"48px",
  color:"coral",
  textAlign:"center",
}

const Banner = ( { children } ) => {
  return(
    <header className="row border border-3 border-primary m-3 p-3 rounded rounded-5">
    <div className="col-5 ">
    <img src="../public/phoenix.jpeg" alt="Phoenix" className={logo} />
    </div>
    <div className="col-7" style={CssAtribute}>
      {children}
    </div>
    </header>
  )
}

export default Banner