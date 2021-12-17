import React from 'react'
import {styles} from './styles'


const Item = (product) => {
   return(
       <>
            <ul style={styles.listProducts}>
                <li style={styles.picture}>{product.title}</li>
                <li>{product.year}</li>
                <li><img style={styles.picture} src={product.pictureUrl} alt={product.title}/></li>
                <li>{product.price}</li>
            </ul>
       </>
   )
}

export default Item
