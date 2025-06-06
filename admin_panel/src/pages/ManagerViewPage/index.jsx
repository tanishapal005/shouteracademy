import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ManagerViewPage from '../../components/ManagerViewPage'


const index = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <ManagerViewPage/>  
    </div>
  )
}

export default index