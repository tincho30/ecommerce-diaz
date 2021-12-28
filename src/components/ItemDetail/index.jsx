import React from 'react'

const index = ({prodId,title,year,pictureUrl,price,category}) => {
    return (
        <div>
            <img src={pictureUrl} alt={title}/>
            <section>
                <h2>{title}</h2>
                <h3>{price}</h3>
                <h4>{category}</h4>
            </section>
        </div>
    )
}

export default index
