import React from 'react'
import Cartwdidget from '../CartWidget/Index';
import {styles} from './styles'
import {useState,useEffect} from 'react'

const Secciones = [
    {id:1, name: "Home", url:"/"},
    {id:2, name: "Series", url:"/section/series"},
    {id:3, name: "Movies", url:"/section/movies"},
    {id:4, name: "Comics", url:"/section/comics"},
    {id:5, name: "Contact", url:"/section/contact"}
]

const Navbar = ({url,name}) => { 
    const [secciones,setSecciones] = useState([]);  

    useEffect(() => {
        const promesaSecciones = new Promise((res,rej)=>{
            res(Secciones)
        });
    
        promesaSecciones.then(res => setSecciones(res))
    },[]);
   
    console.log(secciones)
    
    return (
        <>
        <ul style={styles.nav}>
            {secciones.map((seccion)=>{
                return(
                   <li key={seccion.id}><a style={styles.link} href={seccion.url}>{seccion.name}</a></li> 
                )
            })}
            <Cartwdidget></Cartwdidget>
            </ul>
            </>
          );
}
export default Navbar