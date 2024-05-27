import React from 'react'
import Products from '../../../components/user/products'
import Slider from '../../../components/user/slider'

function Home() {
    return (
        <main>
            <section id='Slider'>
                <Slider />
            </section>
            <section id='products'>
                <div className="container">
                    <Products />
                </div>
            </section>

            <section id='shop'>

            </section>
        </main>
    )
}

export default Home