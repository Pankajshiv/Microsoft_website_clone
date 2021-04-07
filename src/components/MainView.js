import React from 'react'
import showcase from '../images/homepage/front_539.jpeg'

const MainView = () => {
  return (
    <section className="hero xl:mx-20">
      <div>
        <img className="hero-img" src={showcase} alt="hero" />
      </div>
      <div className="overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left">
        <h1 className="font-bold text-2xl mb-2">Surface Laptop Go</h1>
        <p className="text">
          Make the most of every day with our lightest Surface laptop
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 mt-3 hover:bg-blue-800 sm:inline-block">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default MainView
