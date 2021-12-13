import React,{useState} from 'react'
import {styles} from './styles'
import ItemList from '../ItemList';

const ItemListNoMeLaContainer = ({titulo}) => {
    return (
        <div>
            <h2 style={styles.title}>{titulo}</h2>
            <ItemList></ItemList>
        </div>
    )
}

export default ItemListNoMeLaContainer
