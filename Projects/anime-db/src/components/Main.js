import React from 'react'
import AnimeCard from './AnimeCard'

function Main() {
  return (
    <main>
        <div className='main-head'>
            <form className='search-box'>
                <input
                type='search'
                placeholder='Search for Anime'
                required
                ></input>
            </form>
            <div className='anime-list'>
                <AnimeCard />
            </div> 
        </div>
    </main>
  )
}

export default Main