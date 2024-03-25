import React from 'react'
import Home from './Home'

export default function MainProps() {
    let isAdmin = false
  return (
    <div>
        <Home data={isAdmin} />
    </div>
  )
}
