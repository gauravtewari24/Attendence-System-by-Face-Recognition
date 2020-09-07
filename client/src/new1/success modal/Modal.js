import React, { Component } from 'react'
import styles from './modal.module.css'
import tick from '../../Images/tick.gif'
class Modal extends Component{
    constructor(){
        super()
        this.state={
        }
    }
   
    

render(){
  const {text}=this.props
    return(
        <div className={styles.modal}  >
  <div className={styles.modal_content}>
    <div className={styles.modal_body}>
        <img alt="" src={tick} className=" w-30"/>
      <h1>{text}</h1>
    </div>
    <div className={styles.modal_footer}>
    </div>
  </div>

</div>
)
}

}
export default Modal