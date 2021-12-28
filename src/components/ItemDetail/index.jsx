import React from 'react'
import {styles} from './styles'

const index = ({prodId,title,year,pictureUrl,price,category}) => {
    return (
        <>
        <table style={styles.detailCard}>
        <th rowspan="4"><img style={styles.detailImg} src={pictureUrl} alt={title}/>
        </th>
        <th>
                <tr>
                    <span style={styles.detailTitle}>{title}</span><br></br>
                    <span style={styles.detailPrice}>{"$"+price}</span><br></br>
                    {category}
                </tr>
        </th>
        </table>
        </>
    )
}

export default index
