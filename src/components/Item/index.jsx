import React,{useEffect,useState} from 'react'

const Item = ({id,title,year,pictureUrl,price}) => {
   return(
       <>
            <ul>
                <li>{title}</li>
                <li>{year}</li>
                <li><img src={pictureUrl} alt={title}/></li>
                <li>{price}</li>
            </ul>
       </>
   )
}

export default Item
