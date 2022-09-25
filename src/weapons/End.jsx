import React from 'react'

const End = (props) => {
    let Status = props.Status
    let Reset = props.reset
  return (
    <div className='Result'>
        <div className='Result_main'>
            <span className={`Result_main_${Status === 1 ? 'Win': Status === 2 ? 'Lose' : 'Draw'}`}>{Status === 1 ? 'You Win' : Status === 2 ? 'You LOST' : 'Draw'}</span>
            <button onClick={() => Reset()}>Play Again</button>
        </div>
    </div>
  )
}

export default End