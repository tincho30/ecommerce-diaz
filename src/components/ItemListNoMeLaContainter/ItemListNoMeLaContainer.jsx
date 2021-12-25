import React,{useState,useEffect} from 'react'
import {styles} from './styles'
import ItemList from '../ItemList';

const itemUrl = "randomuser.me/api/?results=8"
//POST se utiliza para crear
//GET devuelve datos
//PUT se utiliza para modificar data

const Products = [
    {prodId:1,title:"Ironman",year:2008,pictureUrl:"./img/ironman.jpg",price:1500},
    {prodId:2,title:"Capitan America",year:2011,pictureUrl:"./img/capitan_america.png",price:2300},
    {prodId:3,title:"Avengers",year:2012,pictureUrl:"./img/avengers.jpg",price:3000},
    {prodId:4,title:"Avengers: Age of Ultron",year:2015,pictureUrl:"./img/avengers2.jpg",price:2500}
]

const ItemListNoMeLaContainer = ({titulo}) => {

    const [products,setProducts] = useState([]);  

    useEffect(() => {
        //UTILIZAR FETCH
        const promesaProducts = new Promise((res,rej)=>{
            setTimeout(function(){
                res(Products)
            },500)
           
        });
        promesaProducts.then(res => setProducts(res))
    },[]);
    return (
        <>
            <h3 style={styles.title}>{titulo}</h3>
            <ItemList style={styles.itemList} products={products}></ItemList>
         </>
          );
}

export default ItemListNoMeLaContainer
