import React from 'react'
import ItemListNoMeLaContainer from '../ItemListNoMeLaContainter/ItemListNoMeLaContainer';
import {styles} from './styles'

const Body = () => {
    return (
        <>
            <div style={styles.main_container}>
                <ItemListNoMeLaContainer titulo="Mirá el listado lince"/>
            </div>
        </>
    )
}

export default Body
