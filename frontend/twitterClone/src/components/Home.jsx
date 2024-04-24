import React from 'react'
import LeftSideBar from './LeftSideBar'
import Feed from './Feed'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex  justify-between mx-auto width-[80%]'>
      <LeftSideBar/>
    <Outlet/>
      <RightSideBar/>
    </div>
  )
}

export default Home
