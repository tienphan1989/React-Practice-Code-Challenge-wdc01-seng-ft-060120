import React from 'react'

const Sushi = (props) => {
  const {id, name, img_url, price} = props.sushi;
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.consumeSushi(id, price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenSushi.includes(props.sushi.id) ?
            null
          :
            <img src={img_url} width="100%" alt=''/>
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi