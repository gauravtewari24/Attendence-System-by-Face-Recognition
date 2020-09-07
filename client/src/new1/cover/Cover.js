import React, { Component } from "react"
import styles from './cover.module.css'
import {Link} from 'react-router-dom'
import 'w3-css';

class Cover extends Component{
render(){
return(
<header className={`${styles.background} vh-100`} id="home">
  <div className={`w3-display-left w3-text-white ${styles.cnt} `} >
    <span className="w3-xxxlarge w3-hide-small">FACIAL AUTHENTICATION</span><br></br>
    <span className="w3-xxlarge w3-hide-large w3-hide-medium">FACIAL AUTHENTICATION </span><br></br>
    <span className={`w3-large ${styles.monospace}`}>Your Security is our responsibility</span>
    <p>
        <Link to="/Login" className="w3-button w3-white
         w3-padding-large w3-large w3-margin-top w3-opacity 
         w3-hover-opacity-off">Proceed
        </Link></p>
  </div>
</header>

)

}
}


export default Cover