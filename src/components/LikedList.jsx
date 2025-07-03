import { useNavigate } from 'react-router-dom'

export const LikedList = ({items}) => {
    const navigate = useNavigate();
    console.log(items.map(item => console.log(item.id)))

    if(!items.length) {
        return (
            <section className='container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20'>
                <p className='text-2xl font-semibold text-white mb-4'>You haven't liked anything yet.</p>
                <button className='btn-primary' onClick={() => navigate('/')}>
                    Genre Time!
                </button>
            </section>
        )
    }

    return (
        <>
            <a href="#liked-main" className="sr-only focus:not-sr-only p-2">Skip to Liked Animes</a>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center py-12'>
                <header className='mb-8 flex flex-col items-center'>
                    <h1 id="liked-title">Here are your Picks!</h1>
                    <button className='btn-primary mt-3' onClick={() => navigate('/')}>Retry?</button>
                </header>

                <main className="w-full" id="liked-main" role="main" aria-labelledby="liked-title">
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {items.map(item => (
                            <a 
                                key={item.id} 
                                href={`https://www.crunchyroll.com/search?from=search&q=${encodeURIComponent(item.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer block rounded-2xl p-1 bg-gradient-to-tr from-purple-600 to-pink-500 shadow-2xl transform hover:scale-105 transition-transform duration-300 h-full"
                            >
                                <div key={item.id} className='bg-white bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col h-full px-4 py-3'>
                                    <img src={item.image} alt={item.title} className='object-cover h-40 w-full rounded-lg' />
                                    <div className="p-2 flex-1 flex flex-col justify-around">
                                        <h3 className='font-bold flex justify-around text-black'>
                                            {item.title}
                                            <img src='./crunchyroll.png' alt='crunchyroll' className='w-6 h-6 mr-2' />
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </>
    )
}