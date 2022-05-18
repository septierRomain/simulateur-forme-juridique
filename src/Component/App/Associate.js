import React, { useContext } from 'react';
import {AssociateContext} from '../../Context/AssociateContext'


function Associate(props) {

  const {associate, setAssociate} = useContext(AssociateContext)

  const toggleAssociate = (e) => {
    const id = e.target.name
    setAssociate({[id]: true})
  }


  return (
    <div>
    <h2>Je m'associe seul ou à plusieurs ?</h2>
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
export default Associate