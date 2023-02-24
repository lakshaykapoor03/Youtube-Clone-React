import React from 'react'
import Header from './Header'
import VideoContainer from './VideoContainer'
import WatchPage from './WatchPage'
import SearchResults from './SearchResults'
import { Outlet } from 'react-router-dom'

const Body=()=> {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default Body