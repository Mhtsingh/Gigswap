import React from 'react'
import "./Feature.scss"

const Feature = () => {
  return (
    <div className='featured'>
        <div className="container">
           <div className="left">
            <h1>Find the perfect <i>freelance</i> service for your business</h1>
            <div className="search">
                <div className="searchInput">
                    <img src="../public/images/search.png"  alt="" />
                    <input type="text" placeholder='Try "building mobile app" ' />
                </div>
                <button>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>AI Service</button>
            </div>
           </div>
           <div className="right">
            <img src="../public/images/man.png" alt="man" />
           </div>
        </div>
    </div>
  )
}

export default Feature