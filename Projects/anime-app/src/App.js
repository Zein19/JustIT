import './Components/style.css'
import { useEffect, useState } from 'react';
import AnimeList from './Components/AnimeList';
import AnimeInfo from './Components/AnimeInfo';
import { AddToList } from './Components/AddToList';

function App() {

  const [search,setSearch] = useState('One Piece')

  const [animeData,setAnimeData]=useState()

  const [animeInfo, setAnimeInfo]=useState()

  // const [myAnimeList, setMyAnimeList]=useState([])

  // const addTo = (anime =>{
  //   const newArray=[...myAnimeList,anime]
  //   setMyAnimeList(newArray);
  // })

  const getData=async()=>{
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }

  useEffect(()=>{
    getData()
  },[search])

  return (
    <div className="App">
      <header className="header">
      <h1>TheAnimeList</h1>
      <div className='search-box'>
        <input type='search' placeholder='Search for Anime'
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      </header>

      <div className='container'>
        <div className='animeInfo'>
          {animeInfo && <AnimeInfo animeInfo = {animeInfo} />}
        </div>
        <div className='anime-row'>
          <h2 className='text-heading'>Anime</h2>
          <div className='row'>
            <AnimeList 
              animeList = {animeData}
              setAnimeInfo = {setAnimeInfo}
              animeComponent = {AddToList}
              // handleList = {(anime)=>addTo(anime)}
            />
          </div>
          {/* <h2 className='text-heading'>My List</h2> */}
        
        </div>
      </div>
    </div>
  );
}

export default App;
