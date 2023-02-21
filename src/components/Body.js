import React from 'react'
import VideoContainer from './VideoContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body=()=> {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default Body