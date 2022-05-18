import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import AREContext from '../../Context/AREContext';

import {AssociateContext} from '../../Context/AssociateContext'
import LimitContext from '../../Context/LimitContext';
import ProtectedContext from '../../Context/Protectedcontext';
import ScalableContext from '../../Context/ScalableContext';

import Associate from './Associate';
import ARE from './ARE';
import Limit from './Limit';
import Protection from './Protection';
import Scalable from './Scalable';
import ActivityContext from '../../Context/ActivityContext';
import OtherActivity from './OtherActivity';

function Questionnary() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // CONTEXT
  const {associate} = useContext(AssociateContext)
  const {needProtection} = useContext(ProtectedContext)
  const {gotARE} = useContext(AREContext)
  const {limitMicro} = useContext(LimitContext)
  const {scalable} = useContext(ScalableContext)
  const {activity} = useContext(ActivityContext)

  // STATE
  // const [associateAnswer, setAssociateAnswer] = useState(false)
  // const [protectionAnswer, setProtectionAnswer] = useState(false)
  // const [AREAnswer, setAREAnswer] = useState(false)
  // const [limitAnswer, setLimitAnswer] = useState(false)
  // const [scalableAnswer, setScalableAnswer] = useState(false)

  return (
    <div className='questionnary'>
      <form onSubmit={handleSubmit}>
        <Associate />
        {associate.isNotAlone ? <ARE /> : ''}
        {associate.isAlone ? <Protection /> : ''}
        {associate.isAlone&&needProtection.needProtection ? <ARE /> : ''}
        {associate.isNotAlone&&gotARE.isNotPaidByARE ? <OtherActivity /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection ? <Scalable /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isScalable ? <ARE /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isNotScalable ? <Limit /> : ''}

        
      </form>
        <div id='send'>
          <Link to='/resultat' className='undo'>Valider</Link>
        </div>
    </div>
  )
}

export default Questionnary