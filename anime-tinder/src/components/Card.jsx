import React from 'react'

/**
 * Props:
 * - anime: { id, image, title, description }
 * - onSwipe: fn(direction: 'left'|'right' | null)
 */
export const Card = ({ anime, action, onTransition }) => {
    // build dynamic classes
    const base = `
        absolute inset-0 mx-auto my-auto
        h-full w-full
        bg-white rounded-xl shadow-lg overflow-hidden
        transition-all duration-300 ease-in
        rounded-2xl p-1
        bg-gradient-to-tr
            from-purple-600 to-pink-500
        shadow-2xl
    `;

    const transformClass = 
    action === 'right'
      ? 'translate-x-full rotate-12 scale-0 opacity-0'
    : action === 'left'
      ? '-translate-x-full -rotate-12 scale-0 opacity-0'
    : 'translate-x-0 scale-100 opacity-100'

    return (
        <div onTransitionEnd={onTransition} className={`${base} ${transformClass}`}>
            <div className="flex h-full flex-col md:flex-row bg-white bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden">
                <img src={anime.image} alt={anime.title} className="object-cover w-full h-48 md:h-auto md:w-1/3 hover:scale-105 transform transition-transform duration-300" />
                <div className="p-4 flex flex-col flex-1 md:w-2/3">
                    <h2 className="font-bold text-black text-lg">{anime.title}</h2>
                    <p className="mt-2 text-black text-left flex-1 overflow-auto scrolling-touch scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-36 md:max-h-full">{anime.description}</p>
                </div>
            </div>
        </div>
    )
}


