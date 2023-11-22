import React from 'react'

function AnimeList({animeList, setAnimeInfo}) {
  return (
    <>
    {
        animeList ?(
            animeList.map((anime,index)=>{
                return(
                <div className='card' key={index} onClick={()=>setAnimeInfo(anime)}>
                    <img src={anime.images.jpg.large_image_url} alt='animeImage'/>
                    <div className='anime-info'>
                        <h4>{anime.title}</h4>
                    </div>
                 </div>
                )
                
            })
        ): "Not Found"
    }
    
    </>
  )
}

export default AnimeList