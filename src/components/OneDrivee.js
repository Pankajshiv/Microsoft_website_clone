import React from 'react'
import oneDrive from '../images/homepage/onedrive.jpg'
const OneDrivee = () => {
  return (
    <section className="hero one-drive xl:mx-20">
      <div>
        <img className="hero-img" src={oneDrive} alt="holiday pass" />
      </div>

      <div className="overlay bg-gray-800 text-center px-10 py-20 text-black sm:bg-transparent sm:text-left">
        <h2 className="font-semibold text-xl mb-2">
          Microsoft OneDrive
        </h2>
        <p className="mb-2 text">
        Save your files and photos to OneDrive and access them from any device, anywhere
        </p>
        <button className="mr-4 bg-black text-white py-2 px-5 hover:underline hover:bg-opacity-80">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default OneDrivee
