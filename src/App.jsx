import { useEffect, useState, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { fetchAnime } from './api'
import { Genres } from './components/Genres'
import { LikedList } from './components/LikedList'
import { Cards } from './components/cards'
import { NotFound } from './components/NotFound'


function App() {
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [fetchedList, setFetchedList] = useState([]);
	const [likedList, setLikedList] = useState([]);
	const topRef = useRef(null);

	// router hooks to watch path changes
	const location = useLocation()

	// enforce: → Genres ("/") → Cards ("/cards") → Liked ("/liked")
	useEffect(() => {
		window.scrollTo(0, 0);
		topRef.current?.focus();

		if(location.pathname == '/') {
			setSelectedGenres([])
			setFetchedList([])
			setLikedList([])
			return
		}

		if((location.pathname == '/cards' && selectedGenres.length === 0)) {
			setFetchedList([])
			setLikedList([])
			return
		}

		if(location.pathname == '/liked' && fetchedList.length === 0) {
			setSelectedGenres([]);
			setFetchedList([])
			setLikedList([])
			return
		}

		if(location.pathname !== '/' && location.pathname !== '/cards' && location.pathname !== '/liked') {
			setSelectedGenres([]);
			setFetchedList([])
			setLikedList([])
		}
	}, [location.pathname]);

	useEffect(() => {
		if(selectedGenres.length > 0) {
			fetchAnime({selectedGenres})
				.then(list => setFetchedList(list))
				.catch(e => console.error('Error: ', e))
		}
	}, [selectedGenres]);

	return (
		<>
			<a href="#main-content" className="sr-only focus:not-sr-only p-2">Skip to content</a>
			<div id="main-content" tabIndex={-1} ref={topRef}>
				<Routes>
					<Route path='/' element={<Genres selected={selectedGenres} onChange={setSelectedGenres} />} />
					<Route path='/cards' element={<Cards list={fetchedList} onLiked={anime => setLikedList(prev => {
						if (prev.some(a => a.id === anime.id)) return prev
							return [...prev, anime]
						})} />} 
					/>
					<Route path='/liked' element={<LikedList items={likedList} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	)
}

export default App
