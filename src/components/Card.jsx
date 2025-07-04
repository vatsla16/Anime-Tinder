import React from 'react'

export const Card = ({ anime }) => {
    // strip any HTML tags from the description
    const stripTags = html => html.replace(/<[^>]+>/g, '')
    const safeDesc = stripTags(anime.description || '')

    return (
        <div className='absolute inset-0 mx-auto my-auto h-full w-full rounded-2xl p-1 bg-gradient-to-tr from-purple-600 to-pink-500 shadow-2xl'>
            <div className="flex h-full flex-col md:flex-row bg-white rounded-xl overflow-hidden">
                <img src={anime.image} alt={anime.title || 'No title'} className="object-cover w-full h-48 md:h-auto md:w-1/3" />
                <div className="p-4 flex flex-col flex-1 md:w-2/3">
                    <h2 className="font-bold text-black text-lg">{anime.title || 'No title'}</h2>
                    <p className="mt-2 text-black text-left flex-1 overflow-auto scrolling-touch scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-36 md:max-h-full">{safeDesc}</p>
                </div>
            </div>
        </div>
    )
}


