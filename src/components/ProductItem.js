import React from 'react'
import Styles from '../components/styles/global.module.css'

export default function ProductItem(props) {
  return (
    <div className={Styles.item_product}>
        <div>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.price}</h4>
            <button>BUY</button>
        </div>
    </div>
        
  )
}

