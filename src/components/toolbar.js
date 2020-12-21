import React from "react"
import { FaRegHeart } from "react-icons/fa"

const Toolbar = () => {
  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-tools-wrapper">
        <button 
          className="toolbar-btn"
          onClick={() => window.location.reload()}  
        >
          Refresh
        </button>
        <FaRegHeart className="heart unselected" size={20}/>
      </div>
    </div>
  )
}

export default Toolbar