import React from 'react'
import Cards from '../Cards/Cards'
import styles from './Flags.module.css';
const Flags = ({data}) => {
    console.log(data)
  return (
    <div className={styles.row}>
      {data.length>0?(data.map((items)=><Cards data={items}/>)):("No Data Available")}
    </div>
  )
}

export default Flags
