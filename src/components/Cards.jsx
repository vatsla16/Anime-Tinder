import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card } from './Card';

export const Cards = ({ list, onLiked }) => {
    const [cards, setCards] = useState(list);
    const navigate = useNavigate();

    useEffect(() => {
        setCards(list)
    }, [list])

    // If Genre is not selected
    if(!list.length) {
        return (
            <section className='container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20'>
                <p className='mb-4'>Pick some genres first!</p>
                <button type='button' className='btn-primary' onClick={() => navigate('/')}>
                    Genre Time!
                </button>
            </section>
        );
    } else if(cards.length == 0) {
        return (
            <section className='container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20'>
                <p className='mb-4'>You have made your choices!</p>
                <button type='button' className='btn-primary' onClick={() => navigate('/liked')}>
                    Time to reveal!
                </button>
            </section>
        );
    }
    
    return (
        <>
            <a href="#cards-main" className="sr-only focus:not-sr-only p-2">Skip to cards selection</a>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen'>
                <header id="cards-title" className='mb-4'>
                    <h1>Pick your <span className='text-gradient'>Poison</span>!</h1>
                </header>

                <main className='flex flex-col items-center space-y-4 mt-4' id="cards-main" role="main" aria-labelledby="cards-title">
                    <div className="relative h-96 w-72 sm:w-80 md:w-100 lg:w-[32rem] overflow-visible">
                        {cards.map((anime, idx) => (
                            <div key={anime.id} style={{ zIndex: cards.length - idx - 10 }} className="absolute inset-0">
                                <Card key={anime.id} anime={anime} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex justify-between w-72">
                        <button type="button" aria-label="Dislike current anime" onClick={() => setCards(prev => prev.slice(1))} className="text-green-900 btn-background cursor-pointer" style={{ zIndex: cards.length - 1 }}>X</button>
                        <button type="button" aria-label="Like current anime" onClick={() => {onLiked(cards[0]); setCards(prev => prev.slice(1));}} className="text-red-900 btn-background cursor-pointer" style={{ zIndex: cards.length - 1 }}>🔥</button>
                    </div>

                    <nav aria-label="Go to Liked Anime" className="mt-6">
                        <Link to="/liked" className="btn-primary">Check what you brewed!</Link>
                    </nav>
                </main>
            </div>
        </>
    )
}