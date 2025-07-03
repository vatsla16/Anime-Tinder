import { useEffect, useState } from 'react'
import { getAllGenres } from '../api'
import { useNavigate } from 'react-router-dom';

export const Genres = ({ selected, onChange}) => {
    const [allGenres, setAllGenres] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllGenres().then(setAllGenres);
    }, []);

    useEffect(() => {
        onChange([])   // clear any previous selection on mount
    }, [onChange])

    const toggle = (genre) => {
        if(selected.includes(genre)) {
            onChange(selected.filter(g => g !== genre))
        } else {
            onChange([...selected, genre])
        }
    }

    return (
        <>
            <a href="#genre-main" className="sr-only focus:not-sr-only p-2">Skip to genre selection</a>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center'>
                <header className='pb-5 text-center'>
                    <h1 id="genre-title" className="text-4xl md:text-5xl font-extrabold text-white">
                        Find <span className='text-gradient'>Animes</span> that you'll love!
                    </h1>
                </header>

                <main className="w-full max-w-lg" id="genre-main" role="main" aria-labelledby="genre-title">
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8'>
                        {allGenres.map(genre => (
                            <button type='button' key={genre} onClick={() => toggle(genre)} aria-pressed={selected.includes(genre)} className={`cursor-pointer flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selected.includes(genre) ? 'bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`} >
                                {genre}
                            </button>
                        ))}
                    </div>
                    <button type='button' className='btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed' disabled={selected.length == 0} aria-disabled={!selected.length} onClick={() => navigate('/cards')}>Find your match!</button>
                </main>
            </div>
        </>
    )
}