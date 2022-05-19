import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import GreyArrow from '../../Assets/grey arrow.svg';

import Banner from '../App/Banner';
import Breadcrumbs from './breadcrumbs';
import Micro from './Micro';
import EI from './EI';
import SAS from './SAS'
import SASU from './SASU';
import SARL from './SARL';
import EURL from './EURL';
import Error from './Error'

import AssociateContext from '../../Context/AssociateContext';
import ProtectedContext from '../../Context/Protectedcontext';
import AREContext from '../../Context/AREContext';
import LimitContext from '../../Context/LimitContext';
import ScalableContext from '../../Context/ScalableContext';
import ActivityContext from '../../Context/ActivityContext';
import SalaryContext from '../../Context/SalaryContext';
import SocialContext from '../../Context/SocialContext';

function Results() {
  
  let history = useNavigate()

  const {associate, setAssociate} = useContext(AssociateContext)
  const {needProtection, setNeedProtection} = useContext(ProtectedContext)
  const {gotARE, setGotARE} = useContext(AREContext)
  const {limitMicro, setLimitMicro} = useContext(LimitContext)
  const {scalable, setScalable} = useContext(ScalableContext)
  const {activity, setActivity} = useContext(ActivityContext)
  const {salary, setSalary} =useContext(SalaryContext)
  const {social, setSocial} = useContext(SocialContext)

  const back = () => {
    history(-1)
    setTimeout(()=>{
      setAssociate({})
      setNeedProtection({})
      setScalable({})
      setLimitMicro({})
      setGotARE({})
      setActivity({})
      setSalary({})
      setSocial({})
    }, 50)
  }

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

        {/* ERROR */}

        {/* Micro entreprise */}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isNotScalable&&limitMicro.isUnderLimit ? 
        <Micro /> : ''}

        {/* Entreprise individuelle */}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isNotScalable&&limitMicro.isAboveLimit ? 
        <EI /> : ''}

        {/* sas */}
        {associate.isNotAlone&&gotARE.isPaidByARE ? <SAS /> : '' }
        {associate.isNotAlone&&gotARE.isNotPaidByARE&&activity.OtherActivity ? <SAS /> : '' }
        {associate.isAlone&&needProtection.needProtection&&gotARE.isPaidByARE ? <SASU /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&gotARE.isPaidByARE&&scalable.isScalable ? <SASU /> : ''}
        {associate.isAlone&&needProtection.needProtection&&gotARE.isNotPaidByARE&&activity.OtherActivity ? <SASU /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isScalable&&gotARE.isNotPaidByARE&&activity.OtherActivity ? <SASU /> : ''}
        {associate.isAlone&&needProtection.needProtection&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary&&social.needSocial ? <SASU /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary&&social.needSocial ? <SASU /> : ''}

        {/* sarl */}
        {associate.isNotAlone&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.monthlySalary ? <SARL /> : ''}
        {associate.isNotAlone&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary&&social.needSocial ? <SAS /> : ''}
        {associate.isNotAlone&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary&&social.noNeedSocial ? <SARL /> : ''}

        {/* eurl */}
        {associate.isAlone&&needProtection.needProtection&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.monthlySalary ? <EURL /> : ''}
        {associate.isAlone&&needProtection.needProtection&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary&&social.noNeedSocial ? <EURL /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isScalable&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.monthlySalary ? <EURL /> : ''}


        </div>
      </div>
    </div>
  )
}

export default Results