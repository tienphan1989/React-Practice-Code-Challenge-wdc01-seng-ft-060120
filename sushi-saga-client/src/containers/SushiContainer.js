import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {

  const renderFreshSushi = () => props.freshSushi.map(freshSushiMapper);
  const freshSushiMapper = (sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} 
    eatenSushi={props.eatenSushi} 
    consumeSushi={props.consumeSushi} />
  } 

  

  return (
    <Fragment>
      <div className="belt">
        {renderFreshSushi()}
        {props.freshSushi.length === 0
        ? 
        <MoreButton requestMoreSushi={props.requestMoreSushi}/> 
        : null}
      </div>
    </Fragment>
  )
}

export default SushiContainer