import React, { useContext } from 'react';
import ActivityContext from '../../Context/ActivityContext';


function OtherActivity(props) {

  const {activity, setActivity} = useContext(ActivityContext)

  const toggleActivity = (e) => {
    const id = e.target.name
    setActivity({[id]: true})
  }


  return (
    <div>
    <h2>Un des dirigeants conservent une activité en parallèle</h2>
    <span id="subtitle">(salarié, micro-entreprise, entreprise individuelle)</span>
    <div className="select_container">

        <button
        name='OtherActivity'
        onClick={(e)=>toggleActivity(e)}
        style={{marginRight: '16px'}}
        className={activity.OtherActivity ? 'select focus' : 'select shadow'}
        >
          Oui
        </button>
        <button
          name='NoOtherActivity'
          onClick={(e)=>toggleActivity(e)}
          style={{marginRight: '16px'}}
          className={activity.NoOtherActivity ? 'select focus' : 'select shadow'}
        >
          Non
        </button>
    </div>
  </div>
  )
}
export default OtherActivity