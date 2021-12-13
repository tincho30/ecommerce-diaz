import React,{useState,useEffect} from 'react'
import Item from '../Item';

const Products = [
    {prodId:1,title:"Ironman",year:2008,pictureUrl:"./img/ironman.jpg",price:1500},
    {prodId:2,title:"Capitan America",year:2011,pictureUrl:"./img/capitan_america.png",price:2300}
]

const ItemList = () => {
    const [products,setProducts] = useState([]);  

    useEffect(() => {
        const promesaProducts = new Promise((res,rej)=>{
            setTimeout(function(){
                res(Products)
            },2000)
           
        });
        promesaProducts.then(res => setProducts(res))
    },[]);
    
    return (
       
        <>
        
        {products.map((product)=>{
            return(
                <>
                 <Item id={product.prodId} title={product.title} year={product.year} src={product.pictureUrl} price={"$"+product.price}></Item>
                </>
              
            )
        })}
         </>
          );
}
export default ItemList
