import React, { useContext } from 'react';
import {AssociateContext} from '../../Context/AssociateContext'


function Alone(props) {

  const {associate, setAssociate} = useContext(AssociateContext)

  const toggleAssociate = (e) => {
    const id = e.target.name
    setAssociate({[id]: true})
    props.changeAnswer(true)
  }


  return (
    <div>
    <h2>Avez vous plusieurs associés ?</h2>
    <div className="select_container">

        <button
        name='isAlone'
        onClick={(e)=>toggleAssociate(e)}
        className={associate.isAlone ? 'select focus' : 'select shadow'}
        style={{marginRight: '16px'}}
        >
          Seul
        </button>
        <button
          name='isNotAlone'
          onClick={(e)=>toggleAssociate(e)}
          className={associate.isNotAlone ? 'select focus' : 'select shadow'}
          style={{marginRight: '16px'}}
        >
          A plusieurs
        </button>
    </div>
  </div>
  )
}
export default Alone