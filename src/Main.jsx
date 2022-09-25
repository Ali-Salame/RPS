import React from 'react'
import { useState } from 'react'
import Rock from './weapons/Rock'
import Scissors from './weapons/Scissors'
import Paper from './weapons/Paper'
import Rock2 from './weapons/Rock2'
import Scissors2 from './weapons/Scissors2'
import Paper2 from './weapons/Paper2'
import Empty from './weapons/Empty'
import End2 from './weapons/End'

const Main = (props) => {
  const [Style, setStyle] = useState(0)
  const [Selected, setSelected] = useState(false)
  const [picked2, setpicked2] = useState(false)
  const [Response, setRespose] = useState(0)
  const [Status, setStatus] = useState(2)
  const [End, setEnd] = useState(false)
  const [Locked, setLocked] = useState(false)
  let picked = props.picking
  function Rolling(Style){
    props.picked(true)
    setLocked(true)
    
    let random = Math.round(Math.random() * (3 - 1)) + 1;
    setTimeout(() => { 
      setRespose(random);setStyle(Style) 
    }, 2000);
    setTimeout(() => { 
      if (  random === Style){setStatus(3);setpicked2(true);setSelected(true);}
      else if ( random === 1 && Style === 2){props.setScore(prevScore => prevScore + 1);setpicked2(true);setStatus(1);setSelected(true);}
      else if ( random === 2 && Style === 1){setStatus(2);setEnd(true)}
      else if ( random === 3 && Style === 1){props.setScore(prevScore => prevScore + 1);setpicked2(true);setStatus(1);setSelected(true);}
      else if ( random === 1 && Style === 3){setStatus(2);setEnd(true)}
      else if ( random === 2 && Style === 3){props.setScore(prevScore => prevScore + 1);setpicked2(true);setStatus(1);setSelected(true);}
      else if ( random === 3 && Style === 2){setStatus(2);setEnd(true)}
      
    }, 3000);
    setTimeout(() => { 
        setpicked2(false);
        setEnd(false);
        setStyle(0);
        setSelected(false);
        setRespose(0);
        setStatus(0)
        props.picked(false);
        setLocked(false)
      } , 4500);
  }
  function Reset(){
    setStyle(0);setSelected(false);setRespose(0);props.picked(false);setEnd(false);props.setScore(0);setStatus(0)
  } 
    
  return (
    <div className='Container_Main'>
        <div  className='Container_Main_Upper'>
          <div onClick={() => {if(!Locked){Rolling(1)}}}>
            {!picked && Style === 0 && <Paper />}
            {picked && Response === 0 && <Empty />}
            {picked && Style === 1 && <Paper />}
            {picked && Style === 2 && <Scissors />}
            {picked && Style === 3 && <Rock />}
          </div>
          <div onClick={() => {if(!Locked){Rolling(2)}}}>
            {picked && Response === 0 && <Empty />}
            {picked && Response === 1 && <Paper />}
            {picked && Response === 2 && <Scissors />}
            {picked && Response === 3 && <Rock />}
            {!picked && <Scissors />}
          </div>
        </div>
        <div className='Container_Main_Lower'>
          <div onClick={() => {if(!Locked){Rolling(3)}}}>
            {!picked && <Rock />}
          </div>
          <h3 className={picked2 && Selected && Status !== 2 ? 'show' : 'hide'}>{Status === 3 ? 'Its a' : 'You'} <span className={`Result_main_${Status === 1 ? 'Win': 'Draw'}`}>{Status === 1 ? 'Won' : Status === 3 ? 'Draw' : ''}</span></h3>
        </div>
        {End && Status === 2 && <End2 Status={Status} reset={Reset}/>}
    </div>
  )
}

export default Main