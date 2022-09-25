import React from 'react'

const Welcome = (props) => {

    let score = props.score
    let high = props.high



  return (
    <div className='Container_Welcome animate__animated animate__fadeInDown'>
       <div className='Container_Welcome_Menu'>
            <div className='Container_Welcome_Menu_Top'>ROCK PAPER SCISSORS</div>
            <div className='Container_Welcome_Menu_Mid'>
                <button onClick={() => props.Start(true)}>PLAY</button>
            </div>
            <div className='Container_Welcome_Menu_Bot'>
                <div className='high'>
                    <div className='high_title'>High Score</div>
                    <div>{high}</div>
                </div>
            </div>
       </div>
        
    </div>
  )
}

export default Welcome