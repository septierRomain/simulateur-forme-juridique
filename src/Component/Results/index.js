import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import Banner from '../App/Banner';

import GreyArrow from '../../Assets/grey arrow.svg';
import AssociateContext from '../../Context/AssociateContext';
import ProtectedContext from '../../Context/Protectedcontext';
import AREContext from '../../Context/AREContext';
import LimitContext from '../../Context/LimitContext';
import ScalableContext from '../../Context/ScalableContext';
import Breadcrumbs from './breadcrumbs';
import Micro from './Micro';
import EI from './EI';
import SAS from './SAS'
import ActivityContext from '../../Context/ActivityContext';

function Results() {
  
  let history = useNavigate()

  const {associate, setAssociate} = useContext(AssociateContext)
  const {needProtection, setNeedProtection} = useContext(ProtectedContext)
  const {gotARE, setGotARE} = useContext(AREContext)
  const {limitMicro, setLimitMicro} = useContext(LimitContext)
  const {scalable, setScalable} = useContext(ScalableContext)
  const {activity, setActivity} = useContext(ActivityContext)

  const back = () => {
    history(-1)
    setTimeout(()=>{
      setAssociate({})
      setNeedProtection({})
      setScalable({})
      setLimitMicro({})
      setGotARE({})
    }, 50)
  }

  // useEffect(() => {
  //   setAssociate(JSON.parse(window.localStorage.getItem('associate')))
  // }, [])

  return (
    <div className='wrap'>
      <Banner />
      <div>
        <button onClick={() =>back()} className="return">
        <img src={GreyArrow} alt="fleche grise"/>
          Retour
        </button>
        <Breadcrumbs />
        <h2>Votre forme juridique</h2>
        <div className='wrap-result'>

        {/* Micro entreprise */}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isNotScalable&&limitMicro.isUnderLimit ? 
        <Micro /> : ''}

        {/* Entreprise individuelle */}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isNotScalable&&limitMicro.isAboveLimit ? 
        <EI /> : ''}

        {/* sas */}
        {associate.isNotAlone&&gotARE.isPaidByARE ? <SAS /> : '' }
        {associate.isNotAlone&&gotARE.isNotPaidByARE&&activity.OtherActivity ? <SAS /> : '' }

        {/* sarl */}
        

        </div>
      </div>
    </div>
  )
}

export default Results