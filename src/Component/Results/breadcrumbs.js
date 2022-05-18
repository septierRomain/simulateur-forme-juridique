import React, {useContext} from 'react';

import Check from '../../Assets/check.svg'
import AREContext from '../../Context/AREContext';
import AssociateContext from '../../Context/AssociateContext';
import LimitContext from '../../Context/LimitContext';
import ProtectedContext from '../../Context/Protectedcontext';
import ScalableContext from '../../Context/ScalableContext';
import ActivityContext from '../../Context/ActivityContext'

function Breadcrumbs() {
  const {associate} = useContext(AssociateContext)
  const {gotARE} = useContext(AREContext)
  const {limitMicro} = useContext(LimitContext)
  const {scalable} = useContext(ScalableContext)
  const {needProtection} = useContext(ProtectedContext)
  const {activity} = useContext(ActivityContext)
  
  return (
    <div className='breadcrumbs'>
          {
            associate.isAlone ? <p><img src={Check} alt="fleche grise"/>Vous etes seul associé</p> : 
            associate.isNotAlone ? <p><img src={Check} alt="fleche grise"/>Vous etes plusieurs associés</p> :
            ''
          }
          {
            needProtection.needProtection ? <p><img src={Check} alt="fleche grise"/>Vous avez besoin d'une protection de votre patrimoine</p> :
            needProtection.noNeedProtection ? <p><img src={Check} alt="fleche grise"/>Vous n'avez pas besoin protection de votre patrimoine</p> :
            ''
          }
          {
            gotARE.isPaidByARE ? <p><img src={Check} alt="fleche grise"/>Vous touchez les ARE</p> :
            gotARE.isNotPaidByARE ? <p><img src={Check} alt="fleche grise"/>Vous ne touchez pas les ARE</p> :
            ''
          }
          {
            limitMicro.isUnderLimit ? <p><img src={Check} alt="fleche grise"/>Vous etes en dessous de la limite Micro</p> :
            limitMicro.isAboveLimit ? <p><img src={Check} alt="fleche grise"/>Vous etes au dessus de la limite Micro</p> :
            ''
          }
          {
            scalable.isScalable ? <p><img src={Check} alt="fleche grise"/>Vous etes scalable</p> :
            scalable.isNotScalable ? <p><img src={Check} alt="fleche grise"/>Vous n'etes pas scalable</p> :
            ''
          }
          {
            activity.OtherActivity ? <p><img src={Check} alt="fleche grise"/>Vous conservez une activité</p> :
            activity.NoOtherActivity ? <p><img src={Check} alt="fleche grise"/>Vous n'avez pas d'autres activité</p> :
            ''
          }

        </div>
  )
}
export default Breadcrumbs