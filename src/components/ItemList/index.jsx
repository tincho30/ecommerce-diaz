import React from 'react'
import Item from '../Item';
import {styles} from './styles'


const ItemList = ({products}) => {
    
        return(
            <div>
                {products.map((product)=>{
                    return(
                        <Item key={product.id} title={product.title} year={product.year} pictureUrl={product.pictureUrl} price={product.price}></Item>
                    );
                })}
            </div>
        )
            
    
}
export default ItemList