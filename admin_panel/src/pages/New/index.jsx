import React from 'react'
import NewUser from '../../components/NewUser';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const New = () => {
  return (
    <div className='ml-64 mt-16'>
      <Sidebar/>
      <Header/>
      <div>
        <NewUser/>
      </div>
      
    </div>
  )
}

export default New;