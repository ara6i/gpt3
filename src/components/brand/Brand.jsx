import React from 'react'
import styles from "./brand.module.css"
import { google, slack, atlassian, dropbox, shopify } from './imports'
const Brand = () => {
  return (
    <div className={styles.container}>
      <div >
        <ul className={styles.brand}>
          <li><a href="#"><img src={google} alt="" /></a></li>
          <li><a href="#"><img src={slack} alt="" /></a></li>
          <li><a href="#"><img src={atlassian} alt="" /></a></li>
          <li><a href="#"><img src={dropbox} alt="" /></a></li>
          <li><a href="#"><img src={shopify} alt="" /></a></li>
         
        </ul>
      </div>
    </div>
  )
}

export default Brand