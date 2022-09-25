import React from 'react'

const Header = (props) => {
  return (
    <div className='Container_Header'>
        <div className='Container_Header_Left'>
            <div>ROCK</div>
            <div>PAPER</div>
            <div>SCISSORS</div>
        </div>
        <div className='Container_Header_Right'>
            <div>
              <span>SCORE</span>
              <span className='score'>{props.score}</span>
            </div>
            <div>
              <span>High SCORE</span>
              <span className='score'>{props.high}</span>
            </div>
        </div>
    </div>
  )
}

export default Header