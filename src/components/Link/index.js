import React, {useState,useEffect} from 'react'
import {styles} from './styles'
import { reject } from 'q';

const Secciones = [
    {catId:1, name: "Home", url:"/"},
    {catId:2, name: "Series", url:"/series"},
    {catId:3, name: "Peliculas", url:"/peliculas"},
    {catId:4, name: "Comics", url:"/comics"},
    {catId:5, name: "Contacto", url:"/contacto"}
]



const Link = ({url,name}) => { 
    const [secciones,setSecciones] = useState([]);  

    useEffect(() => {
        const promesaSecciones = new Promise((res,rej)=>{
            res(Secciones)
        });
    
        promesaSecciones.then(res => setSecciones(res))
    },[]);
   
    console.log(secciones)
    const [hover,setHover] = useState(false) 
    
    return (
        
        <>
        {secciones.map((seccion)=>{
            return(
                
              //  <li key={seccion.catId}><a onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{...styles.link,...(hover ? styles.hover : null)}} href={seccion.url}>{seccion.name}</a></li>
              <li key={seccion.catId}><a href={seccion.url}>{seccion.name}</a></li>
            )
        })}
         </>
          );
}
export default Link