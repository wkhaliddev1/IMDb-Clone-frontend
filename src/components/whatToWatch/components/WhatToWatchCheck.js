import React from 'react'
import LoginFirst from './LoginFirst'
import TopPicks from './TopPicks'
import WhatToWatch from './WhatToWatch'

function WhatToWatchCheck() {
    return (
        
        <div className="container mt-5">
            <h1>Top Picks</h1>
            <div id='watchlist-h'><h4>High Rated</h4></div>
            <TopPicks />
            <h1>What to Watch</h1>
            <div id='watchlist-h'><h4>From Your Watchlist</h4></div>

            {sessionStorage.getItem('LogedAccessToken') ? <WhatToWatch /> : <LoginFirst />}
            
        </div>
    ) 
}

export default WhatToWatchCheck
