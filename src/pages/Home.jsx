import React, { useState, useEffect } from 'react'

import { Loader, Card, FormField } from "../components"

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#22232B] text-[32px]'>The Community Showcase</h1>
                <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Experience a new level of creativity with our AI-powered image generation platform – where imagination meets reality!</p>
            </div>
        </section>
    )
}

export default Home