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
                    <div className="row justify-content-center">
                        <div className="section-heading text-center">
                            <p>Xəyalındakı məhsulu Manatikdən tap! </p>
                            <h2>Məhsullar</h2>
                        </div>
                    </div>
                    <Products />
                </div>
            </section>

            <section id='shop'>

            </section>
        </main>
    )
}

export default Home