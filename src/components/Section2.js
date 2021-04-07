import React, { useState } from 'react'
import data from '../data/section2'
// import { FaChevronRight } from 'react-icons/fa'

const Section2 = () => {
  const [cards, setCards] = useState(data)

  return (
    <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
      {cards.map((card) => {
        const { id, image, title, desc, link } = card

        return (
          <article key={id} className="p-8">
            <div>
              <img src={image} alt="card" />
              <h3 className="font-semibold text-xl mt-2 mb-1">{title}</h3>
              <p>{desc}</p>
              <p className="cursor-pointer text-blue-600 font-semibold hover:underline">
              {link} 
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Section2
