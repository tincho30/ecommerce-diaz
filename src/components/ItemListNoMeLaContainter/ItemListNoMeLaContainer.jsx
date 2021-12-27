import React,{useState,useEffect} from 'react'
import {styles} from './styles'
import ItemList from '../ItemList';
import {data} from '../../data/data';
import {useParams} from 'react-router-dom'

const ItemListNoMeLaContainer = ({titulo}) => {

    const [products,setProducts] = useState([]); 
    const { secId } = useParams();
    console.log(secId);

    useEffect(() => {
        //UTILIZAR FETCH
        const promesaProducts = new Promise((res)=>{
            setTimeout(function(){
                const myData = secId
                ? data.filter((item)=>item.category ===
                secId)
                :data;
                res(myData)
            },500)
           
        });
        promesaProducts.then((res) => {
            setProducts(res);
        })
    },[]);
    return (
        <>
            <h3 style={styles.title}>{titulo}</h3>
            <ItemList style={styles.itemList} products={products}></ItemList>
         </>
          );
}

export default ItemListNoMeLaContainer
