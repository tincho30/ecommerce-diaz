import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail'
import {data} from '../../data/data'
const Index = () => {
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        setLoading(true)
        const promesaProducts = new Promise((res)=>{
            setTimeout(function(){
                const myData = data.find((item)=>item.prodId === productId)
                console.log(myData)
                res(myData)
            },500)
        });
        promesaProducts.then((res) => {
            setProduct(res);
            setLoading(false);
        })
    },[productId]);
    return (
        loading ? <h3>CARGANDO...</h3> :
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default Index
