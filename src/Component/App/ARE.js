import React, { useContext } from 'react';
import AREContext from '../../Context/AREContext';


function ARE(props) {

  const {gotARE, setGotARE} = useContext(AREContext)

  const toggleARE = (e) => {
    const id = e.target.name
    setGotARE({[id]: true})
    props.changeAnswer(true)
  }


  return (
    <div>
    <h2>Avez vous les ARE ?</h2>
    <div className="select_container">

        <button
        name='isPaidByARE'
        onClick={(e)=>toggleARE(e)}
        style={{marginRight: '16px'}}
        className={gotARE.isPaidByARE ? 'select focus' : 'select shadow'}
        >
          Oui
        </button>
        <button
          name='isNotPaidByARE'
          onClick={(e)=>toggleARE(e)}
          style={{marginRight: '16px'}}
          className={gotARE.isNotPaidByARE ? 'select focus' : 'select shadow'}
        >
          Non
        </button>
    </div>
  </div>
  )
}
export default ARE