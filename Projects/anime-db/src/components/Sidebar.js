import React from 'react'

function Sidebar({ topAnime }) {
  return (
    <aside className='side-bar'>
        <nav>
            <h3>Top Anime</h3>
            {topAnime.map(anime => (
                <a
                href={anime.url}
                target='blank'
                rel='noreferrer'>
                One Piece
            </a>
            ))}
            
        </nav>
    </aside>
  )
}

export default Sidebar