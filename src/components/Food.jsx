import React from 'react'
import Final from './Final'

const Food = ({foodList}) => {
  return (
    <div >
      {
        foodList.map((food,index) =>(
          <Final
          key={index}
          name={food.title}
          image={food.image}
          />
        ))
      }
    </div>
  )
}

export default Food
