import React from 'react'
import {styles} from './styles'


const Item = (product) => {
   return(
       <>
            <ul style={styles.product}>
                <li style={styles.productTitle}>{product.title}</li>
                <li>{product.category}</li>
                <li style={styles.picture}></li>
                <li>{"Año: "+product.year}</li>
                <li><img style={styles.picture} src={product.pictureUrl} alt={product.title}/></li>
                <li style={styles.price}>{"$"+product.price}</li>
            </ul> 
            
       </> 
   )
}

export default Item
