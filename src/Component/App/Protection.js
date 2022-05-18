import React, { useContext } from 'react';
import ProtectedContext from '../../Context/Protectedcontext';


function Protection(props) {

  const {needProtection, setNeedProtection} = useContext(ProtectedContext)

  const toggleProtection = (e) => {
    const id = e.target.name
    setNeedProtection({[id]: true})
  }


  return (
    <div>
    <h2>Je veux une forme d'entreprise qui protège mon patrimoine personnel ?</h2>
    <div className="select_container">

        <button
        name='needProtection'
        onClick={(e)=>toggleProtection(e)}
        className={needProtection.needProtection ? 'select focus' : 'select shadow'}
        style={{marginRight: '16px'}}
        >
          Oui
        </button>
        <button
          name='noNeedProtection'
          className={needProtection.noNeedProtection ? 'select focus' : 'select shadow'}
          onClick={(e)=>toggleProtection(e)}
          style={{marginRight: '16px'}}
        >
          Non
        </button>
    </div>
  </div>
  )
}
export default Protection