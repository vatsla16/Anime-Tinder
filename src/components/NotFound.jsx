import React from 'react'
import { Link } from 'react-router-dom'

const letters = [
  'l','o','s','t','i','n','m','e','t','a','x','l',
  '4','0','4',
  'y','y','w','v','b','o','t','d','y','p','a',
  'p','a','g','e',
  'v','j','a','n','o','t','s','c','e','w','v','x','e','p',
  'c','f','h','q','e',
  'f','o','u','n','d',
  's','w','q','v','g','o','b','a','c','k'
]

export const NotFound = () => {
  return (
    <main role="main" aria-labelledby="nf-title" className='container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen'>
        <div className="min-h-screen font-sans antialiased text-white">
            <div className="w-4/5 max-w-6xl mx-auto mt-32 px-4">
                <h1 id="nf-title" className='mb-4'><span className='text-gradient'>404</span> Not Found</h1>
                <div className="flex flex-wrap -mx-4">
                    {/* letter grid */}
                    <div role="region" aria-label="404 letter grid" className="w-full lg:w-1/2 px-4">
                        <ul className="grid grid-cols-8 gap-[0.5%]">
                            {letters.map((char, idx) => {
                                const is404 = idx >= 12 && idx <= 14
                                const not = idx >= 33 && idx <=35
                                const isFound = idx >= 49 && idx <= 53
                                const highlight = is404 || not || isFound
                                return (
                                    <li
                                        key={idx}
                                        className={`border border-solid border-white
                                        ${highlight
                                            ? 'bg-purple-500/70 text-white font-bold'
                                            : 'bg-black/90 text-white/90 font-light'}
                                        uppercase overflow-hidden text-center
                                        text-[1.6vw] p-0
                                        `}
                                    >
                                        {char}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/2 px-4 mt-12 mb-4 lg:mt-0">
                        <img src='./notfound.webp' alt='not found' className='w-full object-cover' />
                    </div>
                    <nav aria-label="Not Found actions" className="w-full text-center mt-6">
                        <Link to='/' className="btn-primary block mx-auto">Home</Link>
                    </nav>
                </div>
            </div>
        </div>
    </main>
  )
}
