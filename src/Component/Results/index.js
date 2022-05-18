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

function Results() {
  
  let history = useNavigate()

  const {setAssociate} = useContext(AssociateContext)
  const {setNeedProtection} = useContext(ProtectedContext)
  const {setGotARE} = useContext(AREContext)
  const {setLimitMicro} = useContext(LimitContext)
  const {setScalable} = useContext(ScalableContext)

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

        </div>
      </div>
    </div>
  )
}

export default Results