import React from 'react'
import LiveCommentsList from './LiveCommentsList'

const LiveChat=()=> {
  return (
    <div className="border border-black px-2   h-[400px] w-80">
       <LiveCommentsList comment={"lorem ipsum"} userName="Lakshay Kapoor"/>
       <LiveCommentsList comment={"lorem ipsum"} userName="Lakshay Kapoor"/>
       <LiveCommentsList comment={"lorem ipsum"} userName="Lakshay Kapoor"/>
       <LiveCommentsList comment={"lorem ipsum"} userName="Lakshay Kapoor"/>
       <LiveCommentsList comment={"lorem ipsum"} userName="Lakshay Kapoor"/>
       <LiveCommentsList comment={"lorem ipsum"} userName="Lakshay Kapoor"/>
        </div>
  )
}

export default LiveChat