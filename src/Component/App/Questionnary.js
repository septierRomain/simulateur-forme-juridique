import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import AREContext from '../../Context/AREContext';
import {AssociateContext} from '../../Context/AssociateContext'
import ProtectedContext from '../../Context/Protectedcontext';
import ScalableContext from '../../Context/ScalableContext';
import ActivityContext from '../../Context/ActivityContext';
import SalaryContext from '../../Context/SalaryContext';

import Associate from './Associate';
import ARE from './ARE';
import Limit from './Limit';
import Protection from './Protection';
import Scalable from './Scalable';
import OtherActivity from './OtherActivity';
import Salary from './Salary'
import Social from './Social'

function Questionnary() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // CONTEXT
  const {associate} = useContext(AssociateContext)
  const {needProtection} = useContext(ProtectedContext)
  const {gotARE} = useContext(AREContext)
  const {scalable} = useContext(ScalableContext)
  const {activity} = useContext(ActivityContext)
  const {salary} = useContext(SalaryContext)

  return (
    <div className='questionnary'>
      <form onSubmit={handleSubmit}>
        <Associate />

        {/* SEUL */}
        {associate.isAlone ? <Protection /> : ''}
        {associate.isAlone&&needProtection.needProtection ? <ARE /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection ? <Scalable /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isScalable ? <ARE /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isNotScalable ? <Limit /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isScalable&&gotARE.isNotPaidByARE ? <OtherActivity /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isScalable&&gotARE.isNotPaidByARE&&activity.NoOtherActivity ? <Salary /> : ''}
        {associate.isAlone&&needProtection.noNeedProtection&&scalable.isScalable&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary ? <Social /> : ''}
        {associate.isAlone&&needProtection.needProtection&&gotARE.isNotPaidByARE ? <OtherActivity /> : ''}
        {associate.isAlone&&needProtection.needProtection&&gotARE.isNotPaidByARE&&activity.NoOtherActivity ? <Salary /> : ''}
        {associate.isAlone&&needProtection.needProtection&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary ? <Social /> : ''}

        {/* A PLUSIEURS */}
        {associate.isNotAlone ? <ARE /> : ''}
        {associate.isNotAlone&&gotARE.isNotPaidByARE ? <OtherActivity /> : ''}
        {associate.isNotAlone&&gotARE.isNotPaidByARE&&activity.NoOtherActivity ? <Salary /> : ''}
        {associate.isNotAlone&&gotARE.isNotPaidByARE&&activity.NoOtherActivity&&salary.noMonthlySalary ? <Social /> : ''}
        
      </form>
        <div id='send'>
          <Link to='/resultat' className='undo'>Valider</Link>
        </div>
    </div>
  )
}

export default Questionnary