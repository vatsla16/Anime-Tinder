import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { Card } from './Card';

export const Cards = ({ list, onLiked }) => {
    const [cards, setCards] = useState(list);
    const [action, setAction] = useState(null);
    const navigate = useNavigate();

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

    // When you click a button, tell the top card which way to animate
    const trigger = dir => {
        setAction(dir)
    }

    // After the card’s CSS transition ends:
    const handleTransition = () => {
        if (!action) return

        const [topAnime, ...rest] = cards
        if (action === 'right') {
            onLiked(topAnime)
        }

        setCards(rest)
        setAction(null)
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
                            <div key={anime.id} style={{ zIndex: cards.length - idx }} className="absolute inset-0">
                                <Card key={anime.id} top={idx === 0} anime={anime} action={idx === 0 ? action : null} onTransition={idx === 0 ? handleTransition : undefined} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex justify-between w-72">
                        <button type="button" aria-label="Dislike current anime" onClick={() => trigger('left')} className="btn-red cursor-pointer">Dislike</button>
                        <button type="button" aria-label="Like current anime" onClick={() => trigger('right')} className="btn-green cursor-pointer">Like</button>
                    </div>

                    <nav aria-label="Go to Liked Anime" className="mt-6">
                        <Link to="/liked" className="btn-primary">Check what you brewed!</Link>
                    </nav>
                </main>
            </div>
        </>
    )
}