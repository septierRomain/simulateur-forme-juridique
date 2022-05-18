import React, { useContext } from 'react';
import LimitContext from '../../Context/LimitContext';


function Limit(props) {

  const {limitMicro, setLimitMicro} = useContext(LimitContext)

  const toggleLimit = (e) => {
    const id = e.target.name
    setLimitMicro({[id]: true})
    props.changeAnswer(true)
  }


  return (
    <div>
    <h2>Mon activité est inférieur aux seuils de la micro-entreprise</h2>
    <div className="select_container">

        <button
        name='isUnderLimit'
        style={{marginRight: '16px'}}
        onClick={(e)=>toggleLimit(e)}
        className={limitMicro.isUnderLimit ? 'select focus' : 'select shadow'}
        >
          Oui
        </button>
        <button
          name='isAboveLimit'
          style={{marginRight: '16px'}}
          onClick={(e)=>toggleLimit(e)}
          className={limitMicro.isAboveLimit ? 'select focus' : 'select shadow'}
        >
          Non
        </button>
    </div>
  </div>
  )
}
export default Limit