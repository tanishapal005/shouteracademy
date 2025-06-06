import React from 'react'
import LiveSessions from '../../components/LiveSession'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const livesession = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <LiveSessions/>

    </div>
  )
}

export default livesession