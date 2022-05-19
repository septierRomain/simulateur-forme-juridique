import React, { useContext } from 'react';
import SocialContext from '../../Context/SocialContext';


function Social(props) {

  const {social, setSocial} = useContext(SocialContext)

  const toggleSocial = (e) => {
    const id = e.target.name
    setSocial({[id]: true})
  }


  return (
    <div>
    <h2>Pour ma protection social je préfére :</h2>
    <div className="select_container">

        <button
        name='needSocial'
        style={{marginRight: '16px', width: '300px'}}
        onClick={(e)=>toggleSocial(e)}
        className={social.needSocial ? 'select focus' : 'select shadow'}
        >
          avoir des cotisations élevées (85% environ) mais un régime protecteur
        </button>
        <button
          name='noNeedSocial'
          style={{marginRight: '16px', width: '300px'}}
          onClick={(e)=>toggleSocial(e)}
          className={social.noNeedSocial ? 'select focus' : 'select shadow'}
        >
          avoir des cotisations plus faibles (environ 40%) mais une protection sociale plus précaire
        </button>
    </div>
  </div>
  )
}
export default Social