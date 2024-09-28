import React from 'react'

const Banner = ({ children, direction }:{ children:React.ReactNode, direction:'l' | 'r' }) => {
  return (
    <div className='container'>
        <div className={`banner ${direction}`}>
            { children }
        </div>
    </div>
  )
}

export default Banner