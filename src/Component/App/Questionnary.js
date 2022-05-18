import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import {AssociateContext} from '../../Context/AssociateContext'
import ProtectedContext from '../../Context/Protectedcontext';

import Alone from './Alone';
import Protection from './Protection';

function Questionnary() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const {associate} = useContext(AssociateContext)
  const {needProtection} = useContext(ProtectedContext)

  const [associateAnswer, setAssociateAnswer] = useState(false)
  const [protectionAnswer, setProtectionAnswer] = useState(false)

  return (
    <div className='questionnary'>
      <form onSubmit={handleSubmit}>
        <Alone changeAnswer={setAssociateAnswer} />
        <Protection changeAnswer={setProtectionAnswer} />
      </form>
        <div id='send'>
        {associateAnswer&&protectionAnswer ?
          <Link to='/' className='undo'>Valider</Link> : 
          ''
          }
        </div>
    </div>
  )
}

export default Questionnary