import React, { useContext } from 'react';
import ScalableContext from '../../Context/ScalableContext';


function Scalable(props) {

  const {scalable, setScalable} = useContext(ScalableContext)

  const toggleScalable = (e) => {
    const id = e.target.name
    setScalable({[id]: true})
    props.changeAnswer(true)
  }


  return (
    <div>
    <h2>Mon entreprise doit être évolutive ?</h2>
    <div className="select_container">

        <button
        name='isScalable'
        style={{marginRight: '16px'}}
        onClick={(e)=>toggleScalable(e)}
        className={scalable.isScalable ? 'select focus' : 'select shadow'}
        >
          Oui
        </button>
        <button
          name='isNotScalable'
          style={{marginRight: '16px'}}
          onClick={(e)=>toggleScalable(e)}
          className={scalable.isNotScalable ? 'select focus' : 'select shadow'}
        >
          Non
        </button>
    </div>
  </div>
  )
}
export default Scalable