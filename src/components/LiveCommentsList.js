import React from 'react'

const LiveCommentsList= ({userName,comment})=> {
  return (
    
    <div className="flex items-center py-1 ">
          <img
            className="w-7 rounded-full pt-1"
            src="https://yt3.ggpht.com/yti/AHXOFjXzYc-9Tkv7Sg-wO65yuoEhXM1J2pQxdL4jFI7zJHs=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          <div className="pl-1 text-sm">
            <span className="font-bold"  >{userName}</span>
            <span className="pl-1">{comment}</span>
          </div>
    </div>
    
  )
}

export default LiveCommentsList;